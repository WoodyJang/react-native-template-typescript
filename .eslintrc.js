module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    "airbnb",
    'airbnb-typescript',
    "prettier",
    "prettier/react",
    'prettier/@typescript-eslint',
  ],
  plugins: ["prettier", "react", "react-native", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ecmaFeatures: {
    jsx: true,  // Allows for the parsing of JSX
  },
  env: {
    browser: true,
    jest: true,
    "react-native/react-native": true,
  },
  rules: {
    'react/prefer-stateless-function': 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx",".ts",".tsx"] }],
    "no-use-before-define": [
      "error",
      { "functions": false, "classes": true, "variables": false }
    ],
    "no-console": ["error", { "allow": ["info", "warn", "error"] }],
    "object-curly-newline": "off",
    "prettier/prettier": "error"
    
  },
  globals: { // 全局变量设置
    __DEV__: false // false 表示这个全局变量不允许被重新赋值
  },
  settings: {
    react: {
      version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

};
