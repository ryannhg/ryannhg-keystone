var keystone = require('keystone');
    Types = keystone.Field.Types;

var Link = new keystone.List('Link', {
    autokey: {path: 'slug', from: 'label', unique: true},
    map: { name: 'label' }
});

Link.add(
    
    {
        label: {
            type: Types.Text,
            required: true,
            initial: true
        },
        url: {
            type: Types.Url,
            required: true,
            initial: true
        },
        icon: {
            type: Types.Text,
            required: false
        }
    }

);

Link.defaultColumns = 'label, url, icon';
Link.register();