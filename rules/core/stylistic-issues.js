const prettierConfig = require('prettier-config-joshingmachine')

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
        // Generally, this rule will be disabled with by eslint-config-prettier.
        // However if the user decides not to use Prettier with their linting
        // setup, these rules should still be enforced, so I'm importing the
        // values from my Prettier configuration file so that the configuration
        // file can act as a single Source of Truth™.
        'max-len': [
            'error',
            {
                code: prettierConfig.printWidth,
                tabWidth: prettierConfig.tabWidth,
            },
        ],
        // Same deal as the comment before 'max-depth'
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        // This rule 'max-statements-per-line' is an exception, I feel
        // it's generally a good idea to only have one statement per line.
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
        // Similar to 'max-len', I'm using the Prettier configuration file as
        // the Source of Truth™ so that even if a user decides not to use
        // Prettier with this linting config, the style will still be enforced.
        'no-tabs': prettierConfig.useTabs ? 'off' : 'error',
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
        'prefer-object-spread': 'error',
        // Another rule where it should be disabled by eslint-config-prettier,
        // but if that's not being used, the style is still enforced.
        quotes: ['error', prettierConfig.singleQuote ? 'single' : 'double'],
        // I don't use JSDoc, but maybe one day...
        'require-jsdoc': 'off',
        // And another 'Prettier as Source of Truth™' rule.
        semi: ['error', prettierConfig.semi ? 'always' : 'never'],
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
