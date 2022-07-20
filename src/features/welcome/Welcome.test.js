import { render, screen } from '@testing-library/react';
import welcome from './Welcome';

test('renders learn link', () => {
    render(<welcome />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});