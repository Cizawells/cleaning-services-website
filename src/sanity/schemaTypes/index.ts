import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, contact],
}
