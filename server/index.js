const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')

require("dotenv").config();

app = express()
const port = process.env.PORT || 3000;

// Middleware


app.use(cookieParser())

app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://car-doctor-app-1.web.app',
        // 'https://car-doctor-app-1.firebaseapp.com',
        // 'https://66e4b2100d81ee8c549531c6--guileless-brioche-742af8.netlify.app'
    ],
    credentials: true
}));

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    console.log(token);
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
const cookieOptions = {
    httpOnly: true,
    sameSite: "None",
    secure: true,
};
//localhost:5000 and localhost:5173 are treated as same site.  so sameSite value must be strict in development server.  in production sameSite will be none
// in development server secure will false .  in production secure will be true


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
        // await client.connect();

        const serviceCollection = client.db("carDoctorDB").collection("services");
        const bookingsCollection = client.db("carDoctorDB").collection("bookings");

        // Auth JWT
        app.post('/jwt', async (req, res) => {
            const user = req.body;

            const token = jwt.sign(user, process.env.JWT_TOKEN, {
                expiresIn: '1h'
            })
            res.cookie('token', token, cookieOptions)
            res.send({ success: true })
        })

        app.post('/logout', async (req, res) => {
            res.clearCookie('token', { ...cookieOptions, maxAge: 0 }).send({ success: "token remove" })
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
            const id = req.params.userID;
            console.log("Bookings:", id);
            if (req.tokenUser.userId !== id) {
                return res.status(403).send({ message: "Forbidden Access" })
            }
            const query = { userId: (id) };
            const result = await bookingsCollection.find(query).toArray();
            res.send(result);
        })

        app.get("/all-bookings/:uid", verifyToken, async (req, res) => {
            const id = req.params.uid;
            if (req.tokenUser.userId !== id) {
                return res.status(403).send({ message: "Forbidden Access" })
            }
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
        // await client.db("admin").command({ ping: 1 });
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