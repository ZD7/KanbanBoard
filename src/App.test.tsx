import { render, screen } from '@testing-library/react'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe ("test board", function(){
    it('check name task group', function () {
        render(<BrowserRouter><App/></BrowserRouter>)

        const nameGroupBacklog = screen.getByText("Backlog");
        const nameGroupReady = screen.getByText("Ready");
        const nameGroupInProgress = screen.getByText("InProgress");
        const nameGroupFinished = screen.getByText("Finished");

        expect(nameGroupBacklog).toBeInTheDocument();
        expect(nameGroupReady).toBeInTheDocument();
        expect(nameGroupInProgress).toBeInTheDocument();
        expect(nameGroupFinished).toBeInTheDocument();
    })
})