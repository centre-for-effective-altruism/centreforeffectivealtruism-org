// Schema for People
module.exports = {
  name: {
    singular: 'Person',
    plural: 'People'
  },
  slug: {
    singular: 'person',
    plural: 'people'
  },
  contentfulId: 'person',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: true
}
