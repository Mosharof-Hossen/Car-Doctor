const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();

app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



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

        app.post("/bookings",async(req,res)=>{
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