var express = require('express'),
	app = express(),
	keystone = require('keystone'),
	pug = require('pug');


// Load development environment variables
if (process.env.NODE_ENV !== 'production') {

	try {
		console.info('Loading .env file...');
		require('dotenv').load();	
	} catch (ignore) {
		console.warn('Missing .env file');
	}

}


// Configure KeystoneJS app
keystone.init({

	// Project Options (http://keystonejs.com/docs/configuration/#options-project)
	'name': 'RyanNHG',
	'brand': 'RyanNHG',

	// Web Server Options (http://keystonejs.com/docs/configuration/#options-server)
	'env': process.env.NODE_ENV || 'development',
	'port': process.env.PORT || 1234,
	'sass': 'public',
	'static': ['public'],
	'view engine': 'pug',
	'views': './views',

	// Database and User Auth Options (http://keystonejs.com/docs/configuration/#options-database)
	'mongo': process.env.MONGO_URI || 'mongodb://localhost/ryannhg',
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'cookie-secret',
	'session': true,

	// Application Updates (http://keystonejs.com/docs/configuration/#updates)
	'auto update': true,

	'cloudinary config': process.env.CLOUDINARY_URL || 'cloudinary://api_key:api_secret@cloud_name'

});


// Configure Cloudinary integration (http://keystonejs.com/docs/configuration/#services-cloudinary)
if(process.env.CLOUDINARY_URL === undefined) {

	console.info('No Cloudinary URL provided.');

}

// Import Keystone Models
keystone.import('models');

// Route Configuration
keystone.set('routes', require('./routes/index.js'));

// Navigation Configuration (http://keystonejs.com/docs/configuration/#options-project)
keystone.set('nav', {

	pages: [
		'HomePage'
	],
	blog: [
		'BlogPost',
		'Tag'
	],
	users: 'User',
	links: 'Link',
});


// Start Keystone
keystone.start();