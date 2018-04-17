# Daniel Ochoa's Readable Project

This is my implementation of the `Readable` React Fundamentals Nanodegree project.

## Installation

* Install all project dependencies with `yarn`

## Usage

* You need to setup the backend server at localhost:3001
* Start the development server with `yarn start`, a browser window will be open pointing the correct localhost address.

## Architecture

* The project directory is as follows:

- Actions: All the actions constants and actions creators functions are here.

- Components: All presentational components order in a Named Directory pattern. These presentational components are exposed via index pattern to other parts of the app, so they can be imported in one line.

- Pages: The `containers` of the redux state. The containers connect a `Main` presentational component to the redux Store. In this app are two:

  - List: The Container used for the main page and for the category specific view.

  - Post: The Container used for the post detail page.

- Reducers: The application reducers, separated by responsability.

- Utils: Some javascript implementations for the Axios library and an API to connect to the backend.

## Proud of

- `ItemList` component solves me a lot of headaches as I can reuse it to render a generic, sortable list.
- `Routes` I was able to setup a layout for all pages.
