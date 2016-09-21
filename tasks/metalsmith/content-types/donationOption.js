// Schema for Donation Options
module.exports = {
  name: {
    singular: 'Donation Option',
    plural: 'Donation Options'
  },
  slug: {
    singular: 'donation-option',
    plural: 'donation-options'
  },
  contentfulId: 'donationOption',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: false
}
