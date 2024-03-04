import { MongoClient } from "mongodb";
import * as fs from "fs";


const uri = process.env.MongoUri
const options = {
  tlsCAFile: '/etc/ssl/certs/ca-certificates.crt',
  tlsAllowInvalidCertificates: true
}

let client
let clientPromise

if(!uri){
    throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {

      if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
      }
      clientPromise = global._mongoClientPromise
    } else {
      client = new MongoClient(uri, options)
      clientPromise = client.connect()
    }
    
export default clientPromise