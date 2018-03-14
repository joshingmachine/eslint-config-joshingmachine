module.exports = {
    rules: {
        'camelcase': [ 'error', {
            'properties': 'always',
        }],
        'capitalized-comments': [ 'error', 'always', {
            'line': {
                'ignorePattern': '',
                'ignoreInlineComments': false,
                'ignoreConsecutiveComments': true,
            },
            'block': {
                'ignorePattern': '',
                'ignoreInlineComments': true,
                'ignoreConsecutiveComments': true,
            },
        }],
        // Honestly, having to reassign 'this' should be avoided by using
        // arrow functions instead, but I'm setting up this rule just in case
        // that isn't always feasible.
        'consistent-this': [ 'error', 'self' ],
        'func-name-matching': [ 'error', 'always', {
            'includeCommonJSModuleExports': true,
        }],
        'func-names': [ 'error', 'as-needed' ],
        'func-style': [ 'error', 'declaration', {
            'allowArrowFunctions': true,
        }],
        'id-blacklist': [ 'error',
            'data',
            'callback',
            'context', // I've been burned too many times...
        ],
        'id-length': [ 'error', {
            'min': 2,
            'max': Infinity,
            'properties': 'always',
            'exceptions': [],
        }],
        'id-match': 'off', // TODO: Determine best id regex

        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-between-class-members': 'off',
        'max-depth': 'off',
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'new-cap': 'off',
        'no-array-constructor': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'off',
        'no-multi-assign': 'off',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'off',
        'no-new-object': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'off',
        'one-var': 'off',
        'operator-assignment': 'off',
        'padding-line-between-statements': 'off',
        'require-jsdoc': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': 'off',
    },
}
