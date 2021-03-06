/*

	## app.bundle.js ##

	This is the master file that organises all of the other scripts used by the site. 

	It uses Browserify to bundle scripts together into a single script, enabling control 
	over load order (as opposed to simply concatenating the directory), and keeps most
	scripts out of the global scope.

	All plugins are installed via NPM to the master node_modules directory. 

	If a plugin is not available via NPM, or the NPM package's 'main' script is not the
	script you want, you may need to set a 'browser' key in the master package.json.

	Scripts that are not CommonJS modules (e.g. some jQuery plugins, user scripts etc) can
	take advantage of browserify-shim: simply add the key to the browserify-shim key of
	package.json using either the require path, or the same name set in the 'browser' key
	as above.

	Note that jQuery is loaded from a CDN, so doesn't need to be added here. Browserify
	handles the dependency resolution automatically.

	See this post for more details:
	http://blog.npmjs.org/post/112064849860/using-jquery-plugins-with-npm 

*/
// cookies
global.cookies = require('browser-cookies')
// lazysizes
global.lazySizes = require('lazysizes')
require('lazysizesRespImg')
require('lazysizesBGSet')

// bootstrap javascript plugins

require('bootstrapDropdown')
require('bootstrapCollapse')
require('bootstrapTransition')
// require('bootstrapAffix')
// require('bootstrapScrollspy')
require('bootstrapModal')
// require('bootstrapTooltip')
// third party bootstrap plugins
// inject breakpoints into the global scope so we can use them elsewhere
global.breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200
}

// // GreenSock Animation Plugin
// require('gsap-tweenlite')
// require('gsap-timelinelite')
// require('GSAPEasing')
// require('GSAPCSSPlugin')
// require('GSAPAttrPlugin')
// require('GSAPScrollToPlugin')

// // ScrollMagic
// global.ScrollMagic = require('scrollmagic')
// require('scrollmagicJQuery')
// require('scrollmagicAnimationGSAP')

// jQuery Plugins
// global.iFrameResize = require('iframeResizer')

// form/data validation library

// number formatting
// global.numeral = require('numeral')

// exit intent plugin
// global.ouibounce = require('ouibounce')

// main app scripts
require('./lib/main')
require('./lib/analytics')
// require('./lib/fundraising')
// require('./lib/newsletter')
