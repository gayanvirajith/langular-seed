module.exports = {
    htmlmin: {                                     // Task
        options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeCommentsFromCDATA: true,
            removeOptionalTags: true
        },
        files: {
            'app/views/angularjs/application_production.php': 'app/views/angularjs/application_production.php' // 'destination': 'source'
        }
    }
};
