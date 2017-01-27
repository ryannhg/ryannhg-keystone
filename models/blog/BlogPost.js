var keystone = require('keystone'),
	Types = keystone.Field.Types;

var BlogPost = new keystone.List('BlogPost', {
	autokey: { path: 'slug', from: 'title', unique: true },
	map: { name: 'title' }
});

BlogPost.add(

	{
		title: {
			type: Types.Text,
			initial: true,
			required: true
		},
		subtitle: {
			type: Types.Text,
			required: false
		}
	},

	'Visibility',
	{
		isPublished: {
			type: Boolean,
			default: false
		}
	},

	'Content',
	{
		heroImage: {
			type: Types.CloudinaryImage
		},
		body: {
			type: Types.Markdown,
			height: 500
		},
		tags: {
			type: Types.Relationship,
			ref: 'Tag',
			many: true
		}
	}

);

BlogPost.defaultColumns = 'title, isPublished';
BlogPost.register();