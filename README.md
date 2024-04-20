 ```
-  This will provide all the routes to your app and all the components.

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
 ```
---

```
- This will provide the error that was thrown
  const error = useRouteError()
  console.log('😇 L-6 in error-page.jsx=> ', error.data)
```
---

```
- This will provide the Contact component in the root component as  a child and we can see 2 component and more on the same page.

- But we need to use <Outlet> to tell where to render our other component

 {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  }

  <div>
  <Outlet>
  </div>
```
---

```
- Client side routing without using <a href='' ></a> instead use <Link to={}></Link>
```
---

```
- useLoaderData,  loader as rootLoader  helps us to pass the data to the route

```
---

```
-  <Form> prevents the browser from sending the request to the server and sends it to your route action instead. 

- all of your useLoaderData hooks update and the UI stays in sync with your data automatically.

          <Form method='post'>
            <button type='submit'>New</button>
          </Form>
          
```
