const minimatch = require('minimatch')
const debug = require('debug')('hierarchical-headings')  // DEBUG=hierarchical-headings
const paths = require('../../helpers/file-paths') // helper to get build system paths

/**
 * Hierarchical Headings (Metalsmith plugin)
 *
 * Organises headings from metalsmith-headings hierarchically by tag
 *
 * @param {Object}          opts - plugin options
 * @param {(Object|string)} opts.filter - a glob pattern (passed to minimatch) or a filter function compatible with Array.filter() (will be passed Metalsmith filenames)
 *
 */
function hierarchicalHeadingsPlugin (opts) {
  const defaults = {
    // set some default options here
    filter: '**/*.html'
  }
  const options = Object.assign(defaults, opts)
  const filter = typeof options.filter === 'string' ? minimatch.filter(options.filter) : filter
  // main plugin returned to Metalsmith
  return function hierarchicalHeadings (files, metalsmith, done) {
    // plugin code goes here
    Object.keys(files).filter(filter).forEach((file) => {
      const headings = files[file].headings
      if (!headings) return
      headings.forEach((heading, index) => {
        const level = getLevel(heading)
        const remainingHeadings = headings.slice((index + 1))
        let interrupt = false
        remainingHeadings.forEach(remainingHeading => {
          // if we've gone back up the hierarchy and hit a sibling, then don't add any more
          if (interrupt) return
          const remainingLevel = getLevel(remainingHeading)
          if (remainingLevel === level) {
            interrupt = true
            return
          }
          // if we're here, and the level is a direct descendent, add it as a child
          if (remainingLevel === (level + 1)) {
            heading.children = heading.children || []
            heading.children.push(remainingHeading)
          }
        })
      })
    })

    function getLevel (heading) {
      return parseInt(heading.tag.substr(1), 10)
    }
    // tell Metalsmith that we're done
    done()
  }
}

module.exports = hierarchicalHeadingsPlugin
// require this plugin in ./tasks/metalsmith using:
// const hierarchicalHeadings = require(paths.lib('metalsmith/plugins/hierarchical-headings.js'))
