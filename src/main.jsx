import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { persistor, store } from './util/appStore.js';
import { PersistGate } from 'redux-persist/integration/react';

import Error from './component/error'
import Home from './component/home'
import ViewPet from './component/viewPet/index.jsx'
import Search from './component/search/index.jsx'

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
          {
              path: "/",
              element: <Home/>
          },
          {
            path: "/viewpet",
            element: <ViewPet/>
          },
          {
            path: "/search",
            element: <Search/>
          },
      ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={appRouter} />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
