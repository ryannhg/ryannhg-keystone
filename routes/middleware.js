var keystone = require('keystone'),
    md = require('markdown-it')(),
    Footer = keystone.list('Footer');

exports.initLocals = function(req, res, next) {
    
    var locals = res.locals;

    getFooter().then(function(footer){

        locals.app = {

            title: 'RyanNHG',
            production: keystone.get('env') === 'production',
            showNavbar: true,
            showFooter: true,
            footer: footer,
            markdown: md

        };
        
        next();

    })

    
};

function getFooter() {

    return new Promise(function(resolve, reject){

        Footer.model
            .find()
            .limit(1)
            .populate('links')
            .exec()
            .then(function(footers) {

                if(footers == undefined || footers.length === 0) {

                    console.log('Using default footer');

                    resolve(new Footer.model());

                } else {

                    resolve(footers[0]);

                }

            })
            .catch(reject);

    });

}