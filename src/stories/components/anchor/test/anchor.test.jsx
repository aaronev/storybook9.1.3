import { render, fireEvent } from '@testing-library/react';
import Anchor from '../Anchor';

describe(Anchor, () => {
  it('should redirect user if href attribute is provided', () => {
    const { container } = render(<Anchor href="https://www.google.com" label="google.com"/>);


  }); 
  it('should render an alert if it is downloadable', () => {
    const { container } = render(<Anchor href="/" download label="google.com"/>);
    fireEvent.click(container.querySelector('a'));
  });   
});