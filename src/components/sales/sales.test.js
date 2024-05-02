import { render, screen } from '@testing-library/react';
import Sales from './sales';

test('renders text in Sales', () => {
  render(<Sales data={mockData} />);
  const element = screen.getByText(/sales/i);
  expect(element).toBeInTheDocument();
});

test('renders props data', () => {
  render(<Sales data={mockData} />);
  expect(screen.getByText(/8 uploads/i)).toBeInTheDocument();
});

const mockData = 
  {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
