module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
    },
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
        'no-new-symbol': 'error',
        'no-restricted-imports': [ 'error', {
            'paths': [],
            'patterns': [],
        }],
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': [ 'error', {
            'ignoreDestructuring': false,
            'ignoreImport': false,
            'ignoreExport': false,
        }],
        'no-var': 'error',
        'object-shorthand': [ 'error', 'always', {
            'avoidQuotes': true,
            'ignoreConstructors': false,
            'avoidExplicitReturnArrows': false,
        }],
        'prefer-arrow-callback': [ 'error', {
            'allowNamedFunctions': true,
            'allowUnboundThis': true,
        }],
        'prefer-const': [ 'error', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false,
        }],
        'prefer-destructuring': [ 'error', {
            'VariableDeclarator': {
                'array': false,
                'object': true,
            },
            'AssignmentExpression': {
                'array': true,
                'object': true,
            },
        }, {
            'enforceForRenamedProperties': true,
        }],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': [ 'error', 'never' ],
        'sort-imports': [ 'error', {
            'ignoreCase': false,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': [
                'none',
                'all',
                'multiple',
                'single',
            ],
        }],
        'symbol-description': 'error',
        'template-curly-spacing': [ 'error', 'never' ],
        'yield-star-spacing': [ 'error', 'after' ],
    },
}
