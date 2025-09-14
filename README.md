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

<img width="1422" height="793" alt="Screenshot 2025-09-13 at 10 36 00 PM" src="https://github.com/user-attachments/assets/a0a3fac9-a67b-4ecc-93d2-4c3c70c1aa69" />

<img width="280" height="99" alt="Screenshot 2025-09-13 at 10 37 22 PM" src="https://github.com/user-attachments/assets/197bf7cd-cb00-48a0-a7b8-eed6ed86d2e0" />

Running the test will test the interaction for each of the components. If green checkmarks are present next beside all of the components, then components are passing interaction.

## Testing Accessibility

If the <strong>"testing module"</strong> expand button is visible, click on the <strong>testing module</strong> button and then check the accessibility checkbox.

<img width="324" height="296" alt="Screenshot 2025-09-13 at 10 37 06 PM" src="https://github.com/user-attachments/assets/cda0382f-c2f2-405e-ad04-a8025cfa8bc8" />

Click run test again and if green checkmarks are present next beside all of the components, then components are passing accessibility.

Note: I do not have <strong>"Coverage"</strong> implemented.

## Best Practicing for Testing Accessibility

The best way to test accessibility is by being the user and testing it with assistive technologies and their compatible browsers JAWS/Chrome, NVDA/FF, and VO/Safari.

Before submission, I had the chance to test this on MacOS VO/Safari, iOS VO/Safari, and NVDA/FF. The component is accessible across all!

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
