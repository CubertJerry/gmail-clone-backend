// const mongoose=require("mongoose")

// const connect=async()=>{
//     await mongoose.connect('mongodb+srv://cubert_jerry:jerry_1407@cluster0.z9kqdwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
// }

// module.exports=connect;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cubert_jerry:<jerry_1407>@gmailclone1.rw6na.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone1";
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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);