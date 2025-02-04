import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:projectId,
  token:"sknMf9PXHOFLxXYkMTPd491teWToljdTEyCRyiRXMzaSm2y563XiLIfyCimUqHIPqZ4iI3ZOHsqQ9LkqVQ2UpzQiMjvK3hsDMnAbfCg908sgO1e1ywwwlnrFtK1ckn6jvDVNN2XYJWjQgRCLkdQgbbbjUaNXEb9WBZ7Ad7mnyfNBfUz2rQns",
  dataset:dataset,
  apiVersion:apiVersion,
  useCdn: true,
})
