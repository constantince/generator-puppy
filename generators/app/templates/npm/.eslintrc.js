module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  <%if(language === 'typescript'){%>plugins: [
    'typescript',
    "@typescript-eslint"
  ],
  <%}%>
  "settings": {
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
        <%if(language === 'typescript'){%>"@typescript-eslint/parser": [".ts",".tsx"]<%}%>
    },
    "import/resolver": {
        "node": {
            "extensions": [".js",".jsx",".ts",".tsx"]
        }
    }
  },
  <%if(language === 'typescript'){%>parser: "@typescript-eslint/parser",<%}%>
  extends: [
    'airbnb',
    "eslint:recommended",
    <%if(language === 'typescript'){%>"plugin:@typescript-eslint/eslint-recommended",<%}%>
    <%if(language === 'typescript'){%>"plugin:@typescript-eslint/recommended"<%}%>
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
    <%if(language === 'typescript'){%>"@typescript-eslint/no-namespace": 0,<%}%>
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
