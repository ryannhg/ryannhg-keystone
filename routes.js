exports = module.exports = function(routes) {

	return function(app) {
	
		app.get('/', routes.views['home']);

		app.get('/blog/:blogPost', routes.views['blog-post'])
	
	}

};