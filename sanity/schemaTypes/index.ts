import {type SchemaTypeDefinition} from 'sanity'

import {homePageType} from './homePage'
import {pageType} from './page'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [homePageType, pageType],
}