import React from 'react';

import './button.css';

/** Primary UI component for user interaction */
export const SandBox = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  React.useEffect(() => {
    async function getData() {
      const url =
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636172";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
  
        const result = await response.body;
        console.log("what is the result?!!", result);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    getData();
  })

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
