import {render, screen} from '@testing-library/react';
import Header from '../Header';

describe("It tests the header using getBy", () => {
    it('Should render the same text passed into title prop', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByText(/My Header/);
        expect(headingElement).toBeInTheDocument();
    });

    it('Gets by role', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByRole("heading", {text: "My Header"});
        expect(headingElement).toBeInTheDocument();
    });

    it('Gets by title', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByTitle("Header");
        expect(headingElement).toBeInTheDocument();
    });

    it('Gets by id', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.getByTestId("header");
        expect(headingElement).toBeInTheDocument();
    });

    it('Gets all by role', () => {
        render(<Header title="My Header"/>);
        const headingElements = screen.getAllByRole("heading");
        expect(headingElements.length).toBe(1);
    });
});

describe("It tests the header using findBy", () => {
    it('Should render the same text passed into title prop', async () => {
        render(<Header title="My Header"/>);
        const headingElement = await screen.findByText(/My Header/);
        expect(headingElement).toBeInTheDocument();
    });
})

describe("It tests the header using queryBy", () => {
    it('Should render the same text passed into title prop', () => {
        render(<Header title="My Header"/>);
        const headingElement = screen.queryByText(/dogs/);
        expect(headingElement).not.toBeInTheDocument();
    });
})