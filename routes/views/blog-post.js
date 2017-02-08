var keystone = require('keystone'),
    BlogPost = keystone.list('BlogPost');
    

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.app.title = locals.app.title + ' | Blog';


    getBlogPost(req.params.blogPost)
    .then(function(blogPosts) {

        if(blogPosts == undefined || blogPosts.length === 0) {

            console.info('Blog post "' + req.params.blogPost + '" not found, redirecting to homepage.');

            res.redirect('/');

        } else {

            locals.page = blogPosts[0];

            locals.data = JSON.stringify({});

            view.render('blog/index');  

        }
      
    })
    .catch(console.error);

};

function getBlogPost(blogPost) {

    return BlogPost.model
        .find({ slug: blogPost })
        .limit(1)
        .populate('tags')
        .exec();

}