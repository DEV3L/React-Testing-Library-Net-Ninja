import {fireEvent, render, screen} from '@testing-library/react';
import Todo from '../Todo';
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
    return <BrowserRouter>
        <Todo/>
    </BrowserRouter>
}

const addTask = (tasks) => {
    tasks.forEach((task) => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
        const buttonElement = screen.getByRole("button", {name: /Add/})
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement)
    })
}

describe("Todo", () => {
    it('Should add Todo to List when added', () => {
        render(<MockTodo/>);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../)
        inputElement.value = inputElement.value || undefined; // avoid tslint error

        const buttonElement = screen.getByRole("button", {name: /Add/})

        fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
        fireEvent.click(buttonElement)

        const divElement = screen.getByText(/Go Grocery Shopping/)

        expect(inputElement.value).toBe("")
        expect(divElement).toBeInTheDocument()
    });

    it('Should add multiple Todos to List when added', () => {
        render(<MockTodo/>);

        let tasks = ["Go Grocery Shopping", "Pet my cat", "Wash my hands"]
        addTask(tasks)

        const divElements = screen.getAllByTestId("task-container")

        expect(divElements.length).toBe(3)
    });

    it('Should not have completed when Todo initially rendered', () => {
        render(<MockTodo/>);

        let tasks = ["Go Grocery Shopping"]
        addTask(tasks)

        const divElement = screen.getByText(/Go Grocery Shopping/)

        expect(divElement).not.toHaveClass("todo-item-active")
    });

    it('Should have completed when Todo initially rendered', () => {
        render(<MockTodo/>);

        let tasks = ["Go Grocery Shopping"]
        addTask(tasks)

        const divElement = screen.getByText(/Go Grocery Shopping/)
        fireEvent.click(divElement)

        expect(divElement).toHaveClass("todo-item-active")
    });
})
