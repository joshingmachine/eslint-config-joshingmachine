module.exports = {
    rules: {
        'for-direction': 'error',
        'getter-return': [
            'error',
            {
                allowImplicit: false,
            },
        ],
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': [
            'error',
            {
                allow: [''],
            },
        ],
        'no-constant-condition': [
            'error',
            {
                checkLoops: true,
            },
        ],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': [
            'error',
            {
                allowEmptyCatch: false,
            },
        ],
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': [
            'error',
            'all',
            {
                conditionalAssign: true,
                enforceForArrowConditionals: true,
                ignoreJSX: 'multi-line',
                nestedBinaryExpressions: true,
                returnAssign: true,
            },
        ],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': [
            'error',
            {
                allowConstructorFlags: ['u', 'y'],
            },
        ],
        'no-irregular-whitespace': [
            'error',
            {
                skipComments: false,
                skipRegExps: true,
                skipStrings: true,
                skipTemplates: true,
            },
        ],
        'no-misleading-character-class': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: true,
            },
        ],
    },
}
