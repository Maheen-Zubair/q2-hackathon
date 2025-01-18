import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:projectId,
  dataset:dataset,
  apiVersion:apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
