import {render, screen} from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import {BrowserRouter} from "react-router-dom";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
}

describe("TodoFooter", () => {
    it('Should render the correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
        const paragraphElement = screen.getByText(/5 tasks left/);
        expect(paragraphElement).toBeInTheDocument();
    });

    it('Should render the "task" when number of incomplete tasks is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/);
        expect(paragraphElement).toBeInTheDocument();
    });

    it('Should be truthy', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/);
        expect(paragraphElement).toBeTruthy();
    });

    it('Should be visible', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/);
        expect(paragraphElement).toBeVisible();
    });

    it('Should contain paragraph', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/);
        expect(paragraphElement).toContainHTML("p");
    });

    it('Should have text content', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByTestId("paragraph");
        expect(paragraphElement).toHaveTextContent("1 task left");
    });

    it('Should not be falsy', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByTestId("paragraph");
        expect(paragraphElement).not.toBeFalsy();
    });

    it('Should check value', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByTestId("paragraph");
        expect(paragraphElement.textContent).toBe("1 task left");
    });
})
