const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')

require("dotenv").config();

app = express()
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser())

app.use(express.json());

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).json({ message: 'Access denied. Token is missing.' })
    }

    jwt.verify(token, process.env.JWT_TOKEN, async (err, user) => {
        if (err) {
            return res.status(403).send('Invalid or expired token.');
        }
        req.tokenUser = user;
        next();
    })
}



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.hm5pj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const serviceCollection = client.db("carDoctorDB").collection("services");
        const bookingsCollection = client.db("carDoctorDB").collection("bookings");

        // Auth JWT
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            console.log(user);

            const token = jwt.sign(user, process.env.JWT_TOKEN, {
                expiresIn: '1h'
            })
            console.log(token);
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
            })
            res.send({ success: true })
        })

        // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        app.get("/services", async (req, res) => {
            const data = serviceCollection.find();
            const result = await data.toArray();
            res.send(result);
        })

        app.get("/service-details/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await serviceCollection.findOne(query)
            res.send(result);
        })

        app.get("/bookings/:userID", verifyToken, async (req, res) => {
            console.log(req.tokenUser);
            const id = req.params.userID;
            console.log("id", id);
            if (req.tokenUser.userId !== req.params.userID) {
                return res.status(403).send({ message: "Forbidden Access" })
            }
            const query = { userId: (id) };
            const result = await bookingsCollection.find(query).toArray();
            res.send(result);
        })
        app.get("/bookings", async (req, res) => {
            const id = req.params.userID;
            const result = await bookingsCollection.find().toArray();
            res.send(result);
        })

        app.patch("/bookings/:id", async (req, res) => {
            const id = req.params.id;
            const data = req.body
            const query = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    status: data.selectedStatus,
                },
            };
            const result = await bookingsCollection.updateOne(query, updateDoc);
            res.send(result)
        })
        app.delete("/bookings/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookingsCollection.deleteOne(query);
            res.send(result)
        })

        app.post("/bookings", async (req, res) => {
            const data = req.body;
            const result = await bookingsCollection.insertOne(data);
            res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("Server is running...")
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
})