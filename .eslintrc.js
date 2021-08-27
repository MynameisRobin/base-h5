module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // add your custom rules here
  'rules': {
    'vue/max-attributes-per-line': [0, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'any',
        'normal': 'any',
        'component': 'any'
      },
      'svg': 'any',
      'math': 'any'
    }],
    // 防止正则报错
    "no-control-regex": 0,
    '(vue/no-dupe-keys': 'off',
    'no-dupe-keys': 'off',
    'vue/no-unused-vars': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-parsing-error': [0, {'invalid-first-character-of-tag-name': false}],
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': [0, 'PascalCase'],
    'vue/require-component-is': 'off',
    'vue/require-render-return': 'off',
    'vue/html-indent': 'off',
    'vue/no-unused-components': 'off',
    'vue/valid-template-root': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'no-console': 'off',
    'no-empty': 'off',
    'vue/require-valid-default-prop': 'off', // props是否要求默认值必填
    'vue/require-default-prop': 'off',
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'vue/attributes-order': 'off',
    'vue/order-in-components': 'off',
    'vue/v-bind-style': 'off',     // vue双向绑定是否需要v-bind
    'vue/html-closing-bracket-newline': [0, {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/no-multi-spaces': 0,
    'vue/no-template-shadow': 0,
    'no-irregular-whitespace': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/require-prop-type-constructor': 'off',
    'accessor-pairs': 2, //在对象中使用getter/setter
    // 要求可以使用camelcase(大驼峰)和underscores(下划线)
    'camelcase': [0, {'properties': 'never'}],
    // 要求缩进为四个空格
    // 'indent': [2, 4],
    'indent': 0,
    // 禁止有多个空行，最大1行
    'no-multiple-empty-lines': [2, {'max': 1}],
    // 要求智能判断使用==和！=,给与警告
    'eqeqeq': [0, 'smart'],
    // 要求语句结尾必须使用分号
    // 'semi': [2, 'always'],
    'semi': 0,
    // 要求允许字符串使用单引号、双引号或反引号
    'quotes': 0,
    // 要求箭头函数可以没有参数
    'arrow-parens': 0,
    // 需要给for循环加key
    'vue/require-v-for-key': 0,
    // 要求generator的*前后都要有空格
    'generator-star-spacing': [2, 'both'],
    // 要求异步箭头函数表达式前后都要有空格
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 要求回调函数参数有err或error时可以无错误处理
    'handle-callback-err': 0,
    'no-undef': 0,
    'no-unreachable': 0
  }
}
