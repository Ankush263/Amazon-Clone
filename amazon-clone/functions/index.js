const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KyTYDSBWqHPKSDaPL3NjDXXCtNNryJmjZYJZQ0Jhh7vqbkjKvnsi29oaZ5CpSAJT9h8gBi8P9D4e8IICNaPAmOB00sIWeeCpN"
);

const port = process.env.port || 3000
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.body.basketTotal;
  console.log(request.body)

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api


app.listen(port, error=> {
  if (error) throw error;
  console.log('Server running on port ' + port);
});