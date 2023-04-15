import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header', () => {
    it('should toggle the navbar collapse when the toggle button is clicked', () => {
        const { getByTestId, getByLabelText, getByRole } = render(<Header />);

        // Select the header element by its data-testid attribute
        const headerElement = getByTestId('header');

        // Check that the header element has the correct background color
        expect(headerElement).toHaveStyle({ backgroundColor: 'rgba(82,111,142,0.25)' });

        // Click the navbar toggle button
        const toggleButton = getByRole('button');
        fireEvent.click(toggleButton);

        // Check that the navbar collapse is now visible
        const navbarCollapse = getByTestId('navbarCollapse');
        expect(navbarCollapse).toHaveClass("navbar-collapse");

        // Click the navbar toggle button again
        fireEvent.click(toggleButton);

        // Check that the navbar collapse is now hidden
        expect(navbarCollapse).toHaveClass("collapse navbar-collapse");
    });
});
