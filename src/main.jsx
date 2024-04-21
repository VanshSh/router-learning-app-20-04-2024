import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './routes/root'
import ErrorPage from './error-page.jsx'
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact.jsx'
import EditContact, { action as editAction } from './routes/edit.jsx'
import { action as destroyAction } from './routes/destroy.jsx'
import Index from './routes/index.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Index />,
//           },
//           {
//             path: 'contacts/:contactId',
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: 'contacts/:contactId/edit',
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: 'contacts/:contactId/destroy',
//             action: destroyAction,
//             errorElement: <div>Opps.. Something went wrong</div>,
//           },
//         ],
//       },
//     ],
//   },
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path='contacts/:contactId'
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path='contacts/:contactId/edit'
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route path='contacts/:contactId/destroy' action={destroyAction} />
      </Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
