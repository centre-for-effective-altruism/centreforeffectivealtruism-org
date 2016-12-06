// Schema for Posts
module.exports = {
  name: {
    singular: 'Blog Post',
    plural: 'Blog Posts'
  },
  slug: {
    singular: 'post',
    plural: 'posts'
  },
  contentfulId: 'post',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'date',
    reverse: true
  },
  createPage: true,
  pagination: {
    perPage: 10
  }
}
