// Schema for Organizations
module.exports = {
  name: {
    singular: 'Organization',
    plural: 'Organizations'
  },
  slug: {
    singular: 'organization',
    plural: 'organizations'
  },
  contentfulId: 'organization',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: true,
  pagination: {
    perPage: 10
  }
}
