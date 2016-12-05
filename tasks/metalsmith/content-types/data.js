// Schema for Data
module.exports = {
  name: {
    singular: 'Data',
    plural: 'Data'
  },
  slug: {
    singular: 'data',
    plural: 'data'
  },
  contentfulId: 'data',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: false
}
