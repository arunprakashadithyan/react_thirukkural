import React from "react";
import App from "./App";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureStore([])

test("Check if the header component is rendered", () => {
    const store = mockStore({});
    const {getByTestId} = render(
        <Provider store={store}>
                <App/>
        < /Provider>);
    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();
})

test("Check if all the homepage route is rendered", () => {
    const store = mockStore({});
    const {getByTestId} = render(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const homepageElement = getByTestId('homepage');
    expect(homepageElement).toBeInTheDocument();
})