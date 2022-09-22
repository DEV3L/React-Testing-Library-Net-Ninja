import {render, screen} from '@testing-library/react';
import FollowersList from '../FollowersList';
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return <BrowserRouter>
        <FollowersList/>
    </BrowserRouter>
}

describe("FollowersList", () => {
    it('Should render FollowersList', async () => {
        render(<MockFollowersList/>);

        const followerDivElement = await screen.findByTestId("follower-item-0")

        expect(followerDivElement).toBeInTheDocument()
    });

    it('Should render multiple followers in FollowersList', async () => {
        render(<MockFollowersList/>);

        const followerDivElements = await screen.findAllByTestId(/follower-item/)

        expect(followerDivElements.length).toBe(5)
    });
})
