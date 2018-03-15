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
        'line-comment-position': [ 'error, {
            'position': 'above',
            'ignorePattern': '',
            'applyDefaultIgnorePatterns': true,
        }],
        'linebreak-style': [ 'error', 'unix' ],
        'lines-between-class-members': [ 'error', 'always', {
            'exceptAfterSingleLine': false,
        }],
        // While I agree with the idea behind most of these 'max' rules,
        // I feel like it's arbitrary or difficult to pick a good 'max'
        // number for these cases, so I'm leaving them off (for now).
        'max-depth': 'off',
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        // This rule 'max-statements-per-line' is one exception, I feel
        // it's generally a good idea to only have 1 statement per line.
        'max-statements-per-line': [ 'error', {
            'max': 1,
        }],
        'multiline-comment-style': [ 'error', 'separate-lines' ],
        'new-cap': 'off',
        'no-array-constructor': 'off',
        'no-bitwise': [ 'error', {
            'allow': [],
            'int32Hint': false,
        }],
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
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
