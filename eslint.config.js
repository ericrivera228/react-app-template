import globals from 'globals'
import stylisticTs from '@stylistic/eslint-plugin-ts';
import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';



export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: { react: { version: '18.3' } },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsEslintParser, 
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      '@stylistic/ts': stylisticTs,
      react,
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {

      // eslint rules
      'sort-imports': ['error', {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      }],
      indent: ['error', 2],
      'semi-style': 'error',

      // stylistic rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@stylistic/ts/semi': 'error',
      '@stylistic/ts/space-before-blocks': 'error',
      '@stylistic/ts/block-spacing': 'error',
      '@stylistic/ts/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/ts/comma-spacing': ['error', {
        before: false,
        after: true, 
      }],
      '@stylistic/ts/function-call-spacing': ['error', 'never'],
      '@stylistic/ts/key-spacing': ['error', { beforeColon: false }],
      '@stylistic/ts/keyword-spacing': ['error', { before: true }],
      '@stylistic/ts/lines-between-class-members': ['error', 'always', { exceptAfterOverload: true }],
      '@stylistic/ts/member-delimiter-style': 'error',
      '@stylistic/ts/no-extra-semi': 'error',
      '@stylistic/ts/object-curly-newline': ['error',  { multiline: true }],
      '@stylistic/ts/object-curly-spacing': ['error',  'always'],
      '@stylistic/ts/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/ts/quote-props': ['error', 'as-needed'],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/space-before-function-paren': ['error', 'never'],
      '@stylistic/ts/space-infix-ops': 'error',
      '@stylistic/ts/type-annotation-spacing': ['error', {
        before: false, 
        after: true, 
      }],

      // react rules
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/jsx-curly-newline': [ 'error', {
        multiline: 'consistent',
        singleline: 'consistent',
      }],
      'react/button-has-type': 2,
      'react/no-array-index-key': 2,
      'react/checked-requires-onchange-or-readonly': 'error',
      'react/destructuring-assignment': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-closing-bracket-location': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-newline': [ 'error', {
        multiline: 'consistent', 
        singleline: 'consistent', 
      } ],
      'react/jsx-curly-spacing': [ 'error', {
        when: 'never', 
        allowMultiline: false, 
      }],
      'react/jsx-equals-spacing': ['error', 'always'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-indent': ['error', 2],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never', 
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never', 
      }],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }],
      'react/no-array-index-key': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-multi-comp': 'error',
      'react/no-object-type-as-default-prop': 'error',
      'react/self-closing-comp': 'error',
      'react/void-dom-elements-no-children': 'warn',
    },
  },
)
