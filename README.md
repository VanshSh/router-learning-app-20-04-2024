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
---

```
- A loader in react-router is a function that is used to fetch data for a route before it is rendered and useLoaderData will use the data fetched loader function and will keep our page sync without using useEffect 

 loader: contactLoader,
```

---

```
- action is the function that gets called when the any form is submitted. Instead of sending the data to the server it sends it to the client side routing and sends it to a route action

- Loaders and actions can both return a Response (makes sense, since they received a Request!). The redirect helper just makes it easier to return a response that tells the app to change locations.
```
--- 
```
- NavLink is used to get the current state of the data fetching that react-router is doing for us.

                 <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }
                  >
                    {contact.favorite && <span>★</span>}
                  </NavLink>
```
---

```
- useNavigation returns the current navigation state: it can be one of "idle" | "submitting" | "loading".
 
 const navigation = useNavigation();
 navigation.state === "loading" ? "loading" : ""

```