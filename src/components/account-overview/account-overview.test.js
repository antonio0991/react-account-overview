import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('renders component', () => {
  render(<AccountOverview data={mockData}/>);
  const element = screen.getByText(/John Smith/i);
  expect(element).toBeInTheDocument();
});

const mockData = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};