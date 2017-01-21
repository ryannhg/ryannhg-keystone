var keystone = require('keystone');
	Types = keystone.Field.Types;

var HomePage = new keystone.List('HomePage', {
	autokey: {path: 'slug', from: 'name', unique: true},
});

HomePage.add(
	
	{
		name: {
			type: Types.Text,
			default: 'Home Page',
			required: true
		}
	},

	'Intro Section',
	{	
		introTitle: {
			type: Types.Text,
			default: 'Ryan Haskell-Glatz',
			required: true
		},
		introSubtitle: {
			type: Types.Text,
			default: 'A web developer with no social skills.',
			required: true
		}
	},

	'About Section',
	{
		aboutTitle: {
			type: Types.Text,
			default: 'About Ryan',
			required: true
		},
		aboutContent: {
			type: Types.Markdown
		},
		aboutImage: {
			type: Types.CloudinaryImage
		}
	},

	'Links Section',
	{
		linksTitle: {
			type: Types.Text,
			default: 'Where to next?',
			required: true
		},
		pageLinks: {
			type: Types.Relationship,
			ref: 'Link',
			many: true
		}
	},

	'Footer',
	{
		footerQuote: {
			type: Types.Text,
			default: 'Stalking is cool!',
			required: true
		},
		footerLinks: {
			type: Types.Relationship,
			ref: 'Link',
			many: true
		}
	}

);

HomePage.defaultColumns = 'name';
HomePage.register();