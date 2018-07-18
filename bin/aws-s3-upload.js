'use strict'

const s3Upload = require('../lib/s3Upload')
const mime = require('mime-types')

const file = {
  path: process.argv[2],
  mimetype: mime.lookup(process.argv[2]),
  originalname: process.argv[2]
}

s3Upload(file)
  .then((s3Response) => {
    console.log('s3Response is ', s3Response)
    return s3Response
  })
  .catch(console.error)
