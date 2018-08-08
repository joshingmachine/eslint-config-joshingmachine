module.exports = {
    plugins: ['react'],
    rules: {
        'react/boolean-prop-naming': [ 'error', {
            // All options taken from rule defaults
            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
            message: 'Prop name ({{ propName }}) doesn\'t match rule ({{ pattern }})',
            propTypeNames: [ 'bool' ],
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        }],
        'react/button-has-type': ['error', {
            button: true,
            // Disabling reset buttons because they're pretty awful
            // https://www.nngroup.com/articles/reset-and-cancel-buttons/
            reset: false,
            submit: true,
        }],
        'react/default-props-match-prop-types': ['error', {
            allowRequiredDefaults: false,
        }],
        'react/destructuring-assignment': ['error', 'always'],
        // The transpiler may set names for some components,
        // but it would be a good idea to catch any missing ones
        'react/display-name': [ 'error', {
            ignoreTranspilerName: false,
        }],
        'react/forbid-component-props': ['error', {
            forbid: [{
                propName: 'className',
                allowedFor: [],
            }, {
                propName: 'style',
                allowedFor: [],
            }],
        }],
        // Can't think of any DOM attributes to ban
        // (maybe some on a per-project level)
        'react/forbid-dom-props': ['off', {
            forbid: [],
        }],
        // Same here, this would be better for specific projects,
        // where you want to enforce using constructed components
        'react/forbid-elements': ['off', {
            forbid: [],
        }],
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': ['error', {
            checkChildContextTypes: true,
            checkContextTypes: true,
            forbid: ['any', 'array', 'object'],
        }],
        'react/jsx-boolean-value': ['error', 'never', {
            always: [],
        }],
        'react/jsx-child-element-spacing': 'error',

    },
}
