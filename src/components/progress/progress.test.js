import { render, screen } from '@testing-library/react';
import Progress from './progress';

test('percentage get data', () => {
  render(<Progress percentage={37.5}/>);
  expect(screen.getByText(/37.5/i)).toBeInTheDocument();
});
