module.exports = {
    rules: {
        camelcase: [
            'error',
            {
                properties: 'always',
            },
        ],
        'capitalized-comments': [
            'error',
            'always',
            {
                block: {
                    ignoreConsecutiveComments: true,
                    ignoreInlineComments: true,
                    ignorePattern: '',
                },
                line: {
                    ignoreConsecutiveComments: true,
                    ignoreInlineComments: false,
                    ignorePattern: '',
                },
            },
        ],
        // Honestly, having to reassign 'this' should be avoided by using
        // arrow functions instead, but I'm setting up this rule just in case
        // that isn't always feasible.
        'consistent-this': ['error', 'self'],
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: true,
            },
        ],
        'func-names': ['error', 'as-needed'],
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'id-blacklist': [
            // NOTE: Remember not to alphabetize this list, because 'error' is
            // actually the error level
            'error',
            'callback',
            // I've been burned too many times by 'context'...
            'context',
            'data',
        ],
        'id-length': [
            'error',
            {
                exceptions: [],
                max: Infinity,
                min: 2,
                properties: 'always',
            },
        ],
        // TODO: Determine best id regex
        'id-match': 'off',
        'line-comment-position': [
            'error',
            {
                applyDefaultIgnorePatterns: true,
                ignorePattern: '',
                position: 'above',
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: false,
            },
        ],
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
        'max-statements-per-line': [
            'error',
            {
                max: 1,
            },
        ],
        'multiline-comment-style': ['error', 'separate-lines'],
        'new-cap': 'off',
        'no-array-constructor': 'off',
        'no-bitwise': [
            'error',
            {
                allow: [],
                int32Hint: false,
            },
        ],
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-restricted-syntax': 'off',
        'no-ternary': 'off',
        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterSuper: false,
                allowAfterThis: false,
                enforceInMethodNames: false,
            },
        ],
        'no-unneeded-ternary': [
            'error',
            {
                defaultAssignment: false,
            },
        ],
        'one-var': [
            'error',
            {
                initialized: 'never',
                uninitialized: 'always',
            },
        ],
        'operator-assignment': ['error', 'always'],
        // TODO: Turn this rule on with some configurations. I like the idea
        // of enforcing blank lines in some situations, but it's difficult
        // to think through all of those cases right now. One rainy day, though.
        'padding-line-between-statements': 'off',
        // I don't use JSDoc, but maybe one day...
        'require-jsdoc': 'off',
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: true,
                natural: true,
            },
        ],
        'sort-vars': [
            'error',
            {
                ignoreCase: false,
            },
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                exceptions: [],
                markers: [],
            },
        ],
    },
}
