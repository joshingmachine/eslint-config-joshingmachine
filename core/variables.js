module.exports = {
    rules: {
        'init-declarations': ['error', 'always'],
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error'],
        'no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'all',
                allow: [],
            },
        ],
        'no-shadow-restricted-names': 'error',
        'no-undef': [
            'error',
            {
                typeof: false,
            },
        ],
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '',
                args: 'all',
                ignoreRestSiblings: false,
                argsIgnorePattern: '',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '',
            },
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
    },
}
