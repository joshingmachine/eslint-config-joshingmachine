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
                allow: [],
                builtinGlobals: true,
                hoist: 'all',
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
                args: 'all',
                argsIgnorePattern: '',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '',
                ignoreRestSiblings: false,
                vars: 'all',
                varsIgnorePattern: '',
            },
        ],
        'no-use-before-define': [
            'error',
            {
                classes: true,
                functions: false,
                variables: true,
            },
        ],
    },
}
