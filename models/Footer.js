var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Footer = new keystone.List('Footer', {
	autokey: {path: 'slug', from: 'name', unique: true},
});

Footer.add(
	
	{
		name: {
			type: Types.Text,
			default: 'Footer',
			required: true
		}
	},

	'Footer',
	{
		quote: {
			type: Types.Text,
			default: 'Stalking is cool!',
			required: true
		},
		links: {
			type: Types.Relationship,
			ref: 'Link',
			many: true
		}
	}

);

Footer.defaultColumns = 'name, quote';
Footer.register();