var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Tag = new keystone.List('Tag', {
	autokey: { path: 'slug', from: 'name', unique: true },
});

Tag.add(

	{
		name: {
			type: Types.Text,
			initial: true,
			required: true
		}
	}

);

Tag.defaultColumns = 'name';

Tag.relationship({ path: 'blogPosts', ref: 'BlogPost', refPath: 'tags' });

Tag.register();