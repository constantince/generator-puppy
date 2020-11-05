module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  "settings": {
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
    },
    "import/resolver": {
        "node": {
            "extensions": [".js",".jsx",".ts",".tsx"]
        }
    }
  },
  extends: [
    'airbnb',
    "eslint:recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    "semi": "error",
    "indent": ["error", 4],
    "no-console": "off",
    "grouping": 0,
    "allowCall": 0,
    "no-underscore-dangle":0,
    "max-len": ["error", { "code": 150 }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  }
};
