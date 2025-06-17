# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Why do we need hooks?
Understood the true significance of React Framework w.r.t core javascript.

how multiple changes which have to be done on the UI is done through hooks of react.

## Virtual DOM
it's a virtual DOM build by react framework to sync the changes between framework and actual browser DOM.

## Fibre Algorithm
Fibre is an algorithm which was internally used by react framework to update the virtual DOM, so that whatever changes happened on the virtual DOM will be reflected on the actual DOM.

## Hydration
It's a mechanism of injecting the JS logic to handle the events after rendering actual HTML, so that events can be handled in real time through the behind processing logic written in react, at the end of the day, it's JavaScript.

## Reconcillation
It's a optimization algorithm of react, which is actually responsible for identifying the changes between DOM of react and actual and updating only those changes to achieve the concept of optimization as well.

