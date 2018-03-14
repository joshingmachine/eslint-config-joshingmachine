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
    },
}
