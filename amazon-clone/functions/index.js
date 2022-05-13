const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51KyTYDSBWqHPKSDaPL3NjDXXCtNNryJmjZYJZQ0Jhh7vqbkjKvnsi29oaZ5CpSAJT9h8gBi8P9D4e8IICNaPAmOB00sIWeeCpN')

//API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (req, res) => {
  res.status(200).send('hello Ankush')
})

// - Listen commands
exports.api = functions.https.onRequest(app)
//http://localhost:5001/clone-14626/us-central1/api