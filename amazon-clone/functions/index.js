const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const stripe = require("stripe")("sk_test_51KyTYDSBWqHPKSDaPL3NjDXXCtNNryJmjZYJZQ0Jhh7vqbkjKvnsi29oaZ5CpSAJT9h8gBi8P9D4e8IICNaPAmOB00sIWeeCpN");

const port = process.env.port || 5000
const app = express()

app.use(cors({ origin: true }));
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Hello Ankush')
})



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

exports.api = functions.https.onRequest(app)

app.listen(port, (err) => {
  if (err) throw err
  console.log('your app is running on the port ' + port)
  }
)