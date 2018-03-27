module.exports = {
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
        ecmaVersion: 2018,
    },
    rules: {
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],
        'arrow-parens': [
            'error',
            'as-needed',
            {
                requireForBlockBody: false,
            },
        ],
        'arrow-spacing': [
            'error',
            {
                after: true,
                before: true,
            },
        ],
        'constructor-super': 'error',
        'generator-star-spacing': [
            'error',
            {
                after: false,
                anonymous: 'before',
                before: true,
                method: 'before',
            },
        ],
        'no-class-assign': 'error',
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true,
            },
        ],
        'no-new-symbol': 'error',
        'no-restricted-imports': [
            'error',
            {
                paths: [],
                patterns: [],
            },
        ],
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreExport: false,
                ignoreImport: false,
            },
        ],
        'no-var': 'error',
        'object-shorthand': [
            'error',
            'always',
            {
                avoidExplicitReturnArrows: false,
                avoidQuotes: true,
                ignoreConstructors: false,
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
                allowUnboundThis: true,
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                AssignmentExpression: {
                    array: true,
                    object: true,
                },
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
            },
            {
                enforceForRenamedProperties: true,
            },
        ],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': ['error', 'after'],
    },
}
