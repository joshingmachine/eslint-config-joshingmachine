module.exports = {
    rules: {
        'callback-return': [ 'error', [ 'callback', 'cb', 'next', 'done' ] ],
        'global-require': 'error',
        'handle-callback-err': [ 'error', 'err' ],
        'no-buffer-constructor': 'error',
        'no-mixed-requires': [ 'error', {
            'grouping': true,
            'allowCall': true,
        }],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': [ 'off', {
            'paths': [],
            'patterns': [],
        }],
        'no-sync': [ 'error', {
            'allowAtRootLevel': false,
        }],
    },
}
