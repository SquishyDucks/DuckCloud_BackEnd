'use script'

require('dotenv').config()

// console.log('process.env.TEST is ', process.env.TEST)

// Load the SDK for JavaScript
const AWS = require('aws-sdk')

// Create S3 service object
const s3 = new AWS.S3()

// generate random string for key name
// use crypto that's part of Node
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const promiseRandomBytes = () => {
  // promisify crypto.randomBytes
  return new Promise((resolve, reject) => {
    crypto.randomBytes(20, (err, buf) => {
      if (err) {
        reject(err)
      } else {
        console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`)
        // whatever arguments gets passed to resolve, is passed to the .then() argument
        resolve(buf.toString('hex'))
      }
    })
  })
}

const promiseS3Upload = (params) => {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const s3Upload = (file) => {
  return promiseRandomBytes()
    .then((randomString) => {
      const stream = fs.createReadStream(file.path)
      const ext = path.extname(file.originalname)
      const today = new Date().toISOString().split('T')[0]
      // const date = new Date().toLocaleDateString()

      const params = {
        ACL: 'public-read',
        Bucket: process.env.BUCKET_NAME,
        ContentType: file.mimetype,
        Key: today + '/' + randomString + ext,
        Body: stream
      }
      return params
    })
    .then(promiseS3Upload)
}

module.exports = s3Upload
