import React from "react"
import { render } from "react-dom"
import { ConnectedRouter } from "react-router-redux"
import { BrowserRouter } from 'react-router-dom'
import store, { history } from "./store"
import App from "./App"

// import './index.css';

import {Provider} from "react-redux"
console.log(App)
const target = document.querySelector("#root")

render(
	<Provider store={store}>
	    <ConnectedRouter history={history}>
	    	<App />
	    </ConnectedRouter>
	</Provider>, 
target
)