import userEvent from '@testing-library/user-event'
import { render, fireEvent } from './test-utils';

import '@testing-library/jest-dom'
import Table from '../table'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Table/>)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
});