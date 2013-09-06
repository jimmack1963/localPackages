Package.describe({
    summary: "Store a constant here"
});
Package.on_use(function (api, where) {
    api.use(['templating'], 'client');
    api.add_files(['constant.js'], 'client');
    if (api.export)
        api.export('MyName');
    
    api.use(['tinytest', 'test-helpers'], 'client')
    api.add_files('tests.js', 'client')
    
});
