module.exports = {
    rules: {
        'arrow-body-style': [ 'error', 'as-needed', {
            'requireReturnForObjectLiteral': false,
        }],
        'arrow-parens': [ 'error', 'as-needed', {
            'requireForBlockBody': false,
        }],
        'arrow-spacing': [ 'error', {
            'before': true,
            'after': true,
        }],
        'constructor-super': 'error',
        'generator-star-spacing': [ 'error', {
            'before': true,
            'after': false,
            'anonymous': 'before',
            'method': 'before',
        }],
        'no-class-assign': 'error',
        'no-confusing-arrow': [ 'error', {
            'allowParens': true,
        }],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': [ 'error', {
            'includeExports': true,
        }],

    },
}
