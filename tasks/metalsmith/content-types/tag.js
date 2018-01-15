// Schema for Tags
module.exports = {
  name: {
    singular: 'Tag',
    plural: 'Tags'
  },
  slug: {
    singular: 'tag',
    plural: 'tags'
  },
  contentfulId: 'tag',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: true
}
