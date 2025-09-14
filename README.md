# Getting Started

## Clone Repository

Full Disclosure: 

This comes with the assumption that the person cloning the application understands git, node, npm, react, typescript, storybook, and command line.

If not please install and/or understand technology before you begin.

<ul>
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">
      Command Line
    </a>
  </li>
  <li><a href="https://git-scm.com/" target="_blank">Git</a></li>
  <li><a href="https://nodejs.org/en" target="_blank">Node and NPM</a></li>
  <li><a href="https://react.dev/" target="_blank">React</a></li>
  <li><a href="https://storybook.js.org/" target="_blank">Storybook</a></li>
  <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
</ul>

When you are ready run this in the command line:

```git clone https://github.com/aaronev/storybook9.1.3.git```

## NPM Install

Enter the cloned repository in the command line and then run this in the command line:

```npm install```

This will install all the packages necessary for the project. 

## NPM Run Storybook

Once everything is installed run this in the command line:

```npm run storybook```

This will run the storybook and allow the application to open in a browser with the URL path:

```http://localhost:6006/```

## Project Location

On the left side navigation menu, navigate to the <strong>"Table"</strong> section and then to the <strong>“Select Downloadable Items”</strong> table example and this is the project. 

All other examples found in the navgation are smaller components that help build this component.

## Testing Interaction

Expand all sections in the left side navigation menu such as the Anchor, Checkbox, Table, and then click the <strong>“Run tests"</strong> located at the bottom of the left side navigation menu. 

Running the test will test the interaction for each of the components. If green checkmarks are present next beside all of the components, then components are passing interaction.

## Testing Accessibility

If the <strong>"testing module"</strong> expand button is visible, click on the <strong>testing module</strong> button and then check the accessibility checkbox.

Click run test again and if green checkmarks are present next beside all of the components, then components are passing accessibility.

Note: I do not have <strong>"Coverage"</strong> implemented.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```