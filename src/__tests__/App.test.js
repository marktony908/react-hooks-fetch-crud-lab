import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('displays question prompts after fetching', async () => {
  render(<App />);
  
  // Wait and verify "View Questions" button
  fireEvent.click(screen.getByText(/View Questions/));

  // Wait for questions to appear
  await waitFor(() => {
    expect(screen.getByText(/lorem testum 1/)).toBeInTheDocument();
  });
});
