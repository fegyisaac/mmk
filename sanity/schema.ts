import { type SchemaTypeDefinition } from 'sanity'
import { banner } from './schemaType/banner'
import { category } from './schemaType/category'
import { product } from './schemaType/product'
import { blogContent } from './schemaType/blogContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, category, product, blogContent],
}
