import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import importHelpers from 'eslint-plugin-import-helpers';

export default [
    js.configs.recommended,

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
        },
        plugins: { '@typescript-eslint': ts },
        rules: {
            ...ts.configs.recommended.rules,
        },
    },

    {
        files: ['**/*.tsx', '**/*.jsx'],
        plugins: {
            react,
            'react-native': reactNative,
        },
        rules: {
            ...react.configs.recommended.rules,
            'react-native/no-inline-styles': 'warn',
        },
    },

    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        plugins: {
            import: importPlugin,
            'unused-imports': unusedImports,
            'import-helpers': importHelpers,
        },
        rules: {
            'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
            'unused-imports/no-unused-imports': 'warn',
            'import-helpers/order-imports': [
                'warn',
                {
                    groups: [['module', 'builtin'], '/^@src/', ['parent', 'sibling', 'index']],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
    },

    prettier,
];
