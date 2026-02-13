import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Homepage as singleton
      S.documentListItem()
        .schemaType('homepage')
        .title('Homepage')
        .id('homepage'),

      // Contact as singleton
      S.documentListItem()
        .schemaType('contact')
        .title('Contact')
        .id('contact'),

      // All other document types
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'homepage' && item.getId() !== 'contact'
      ),
    ])
