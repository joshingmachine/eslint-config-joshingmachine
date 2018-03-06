module.exports = {
    rules: {
        'accessor-pairs': [ 'error', {
            'setWithoutGet': true,
            'getWithoutSet': false,
        }],
        'array-callback-return': [ 'error', {
            'allowImplicit': false,
        }],
        'block-scoped-var': 'error',
        'class-methods-use-this': [ 'error', {
            'exceptMethods': [],
        }],
        'complexity': [ 'off', {
            'max': 20,
        }],
        'consistent-return': [ 'error', {
            'treatUndefinedAsUnspecified': false,
        }],
        'curly': [ 'error', 'all' ],
        'default-case': [ 'error', {
            'commentPattern': '',
        }],
        'dot-location': [ 'error', 'property' ],
        'dot-notation': [ 'error', {
            'allowKeywords': true,
            'allowPattern': '',
        }],
        'eqeqeq': [ 'error', 'always' ],
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': [ 'error', {
            'allowElseIf': true,
        }],
        'no-empty-function': [ 'error', {
            'allow': [],
        }],
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': [ 'error', {
            'allowIndirect': false,
        }],
        'no-extend-native': [ 'error', {
            'exceptions': [],
        }],
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': [ 'error', {
            'commentPattern': '',
        }],
        'no-floating-decimal': 'error',
        'no-global-assign': [ 'error', {
            'exceptions': [],
        }],
        'no-implicit-coercion': [ 'error', {
            'boolean': true,
            'number': true,
            'string': true,
            'allow': [ '!!' ],
        }],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': [ 'off', {
            'allowLoop': true,
            'allowSwitch': true,
        }],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': [ 'error', {
            'ignore': [],
            'ignoreArrayIndexes': true,
            'enforceConst': true,
            'detectObjects': false,
        }],
        'no-multi-spaces': [ 'error', {
            'ignoreEOLComments': false,
            'exceptions': {
                'Property': false,
            },
        }],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [ 'error', {
            'props': true,
            'ignorePropertyModificationsFor': [],
        }],
    },
}
