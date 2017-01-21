var keystone = require('keystone');
 
/**
    Initialises the standard view locals.
    Include anything that should be initialised before route controllers are executed.
*/
exports.initLocals = function(req, res, next) {
    
    var locals = res.locals;
    
    locals.app = {

    	title: 'RyanNHG',
    	production: keystone.get('env') === 'production',
        showNavbar: true

    };
    
    // Add your own local variables here
    
    next();
    
};