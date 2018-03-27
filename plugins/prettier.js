const prettierConfigJoshingmachine = require('prettier-config-joshingmachine')

module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', prettierConfigJoshingmachine],
    },
}
