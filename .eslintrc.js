module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['standard'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    rules: {
        semi: ['error', 'always', { omitLastInOneLineBlock: true }]
    }
};
