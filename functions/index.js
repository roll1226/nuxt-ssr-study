const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
// const express = require('express')
// const app = express()
const envs = functions.config().environment

const nuxt = new Nuxt({
  dev: false,
  buildDir: '.nuxt'
  // build: {
  //   publicPath: '/'
  // }
})

Object.entries(envs).forEach((k, v) => {
  process.env[`${k}`.toUpperCase()] = v
})

exports.app = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  return nuxt.render(req, res)
})

// function handleRequest(req, res) {
//   res.set('Cache-Control', 'public, max-age=10, s-maxage=10')
//   return new Promise((resolve, reject) => {
//     nuxt.render(req, res, (promise) => {
//       promise.then(resolve).catch(reject)
//     })
//   })
// }

// app.use(handleRequest)
// exports.ssr = functions.https.onRequest(app)
