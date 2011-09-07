module('keyToTitle');

test('Transforms camelCased string to words', function() {
    var fn = Form.helpers.keyToTitle;
    
    equal(fn('test'), 'Test');
    equal(fn('camelCasedString'), 'Camel Cased String');
});



module('createEditor');

(function() {
    
    var create = Form.helpers.createEditor,
        editors = Form.editors;

    var options = {
        key: 'test',
        schema: {
            subSchema: {
                key: 'test'
            },
            model: 'test',
            options: []
        }
    };    
    
    test('Accepts strings for included editors', function() {
        ok(create('TextField', options) instanceof editors.TextField);
        ok(create('Number', options) instanceof editors.Number);
        ok(create('TextArea', options) instanceof editors.TextArea);
        ok(create('Password', options) instanceof editors.Password);
        ok(create('Select', options) instanceof editors.Select);
        ok(create('Object', options) instanceof editors.Object);
        ok(create('NestedModel', options) instanceof editors.NestedModel);
        ok(create('Date', options) instanceof editors.Date);
        ok(create('DateTime', options) instanceof editors.DateTime);
        ok(create('List', options) instanceof editors.List);
    });

    test('Accepts editor constructors', function() {
        ok(create(editors.TextField, options) instanceof editors.TextField);
        ok(create(editors.Select, options) instanceof editors.Select);
        ok(create(editors.List, options) instanceof editors.List);
        ok(create(editors.Date, options) instanceof editors.Date);
        ok(create(editors.DateTime, options) instanceof editors.DateTime);
    });
    
})();
