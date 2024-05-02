import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders texts', () => {
  render(<Header data={mockData} />);
  const element = screen.getByText(/YOUR FEEFO SUPPORT CONTACT/i);
  expect(element).toBeInTheDocument();
});

test('renders data text', () => {
  render(<Header data={mockData} />);
  expect(screen.getByText(/john.smith@feefo.com/i)).toBeInTheDocument();
});


const mockData = 
  {
    name: 'John Smith',
    email: 'john.smith@feefo.com'
  }
