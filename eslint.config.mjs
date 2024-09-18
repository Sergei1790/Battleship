import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, 
        ...globals.node,
        ...globals.jest, // Add Jest globals
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-var': 'warn',
      // 'quotes': ['error', 'single'],
    }
  }
];

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import jestPlugin from 'eslint-plugin-jest'; // Import the Jest plugin

// export default [
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser, 
//         ...globals.node,
//         ...globals.jest, // Add Jest globals
//       },
//     },
//   },
//   pluginJs.configs.recommended,
//   jestPlugin.configs.recommended, 
//   {
//     rules: {
//       'no-var': 'warn',
//       // You can override or add additional Jest-specific rules here
//       'jest/no-disabled-tests': 'warn', // Warn for disabled tests
//       'jest/no-focused-tests': 'error', // Error for focused tests like test.only
//       'jest/no-identical-title': 'error', // Error for identical test titles
//     }
//   }
// ];