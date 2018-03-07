module.exports = {
    rules: {
        'for-direction': 'error',
        'getter-return': [ 'error', {
            'allowImplicit': false,
        }],
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': [ 'error', 'always' ],
        'no-console': [ 'error', {
            'allow': [],
        }],
        'no-constant-condition': [ 'error', {
            'checkLoops': true,
        }],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': [ 'error', {
            'allowEmptyCatch': false,
        }],
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': [ 'error', 'all', {
            'conditionalAssign': true,
            'returnAssign': true,

        }],
    },
}
