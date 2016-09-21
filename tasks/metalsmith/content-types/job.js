// Schema for Jobs
module.exports = {
  name: {
    singular: 'Job',
    plural: 'Jobs'
  },
  slug: {
    singular: 'job',
    plural: 'jobs'
  },
  contentfulId: 'job',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'endDateTime',
    reverse: true
  },
  createPage: true
}
