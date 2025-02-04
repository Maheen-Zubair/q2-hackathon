import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';
import reviews from './reviews';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema,reviews],
};