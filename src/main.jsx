import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers.js'
import App from './App.jsx'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools());

const application = <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>;

ReactDOM.createRoot(document.getElementById('root')).render(
  application,
)
