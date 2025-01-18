import { type SchemaTypeDefinition } from 'sanity';
import ProductSchema from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema],
};