import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()

describe("AddInput", () => {
    it('Should render input element', () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
        expect(inputElement).toBeInTheDocument();
    });

    it('Should be able to type into input', () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
        inputElement.value = inputElement.value || undefined; // avoid tslint error

        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}})

        expect(inputElement.value).toBe("Go grocery shopping");
    });

    it('Should have empty input when button is clicked', () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]}/>);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
        inputElement.value = inputElement.value || undefined; // avoid tslint error

        const buttonElement = screen.getByRole("button", {name: "Add"})

        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}})
        fireEvent.click(buttonElement)

        expect(inputElement.value).toBe("");
    });
})
