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
- It activates when we are going to some other route and the process is in progress.
 
 const navigation = useNavigation();
 navigation.state === "loading" ? "loading" : ""

```
---

```
- Note the action points to "destroy". Like <Link to>, <Form action> can take a relative value. Since the form is rendered in contact/:contactId, then a relative action with destroy will submit the form to contact/:contactId/destroy when clicked.

- In React Router, the action prop is used to specify the action that should be taken when a route is matched. The value of the action prop can be any string, but it is typically used to specify the HTTP method that should be used to make the request.
For example, if you want to create a route that handles DELETE requests, you would use the following code:
```
---

```
- Here this path has its own error element therefore it will not propogate till the top of the route.
 {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Opps.. Something went wrong</div>,
      },
```
---

```
- Note the { index:true } instead of { path: "" }. That tells the router to match and render this route when the user is at the parent route's exact path, so there are no other child routes to render in the <Outlet>.
```
---
```
- useNavigate is used to use the browser history for navigation
- Here by clicking the button we will go back one history back in the browser history.

  onClick={() => {
            navigate(-1)
          }}
```
---
```
- This form is different from the others we've used, it does not have <form method="post">. The default method is "get". That means when the browser creates the request for the next document, it doesn't put the form data into the request POST body, but into the URLSearchParams of a GET request.

- Because this is a GET, not a POST, React Router does not call the action. Submitting a GET form is the same as clicking a link: only the URL changes. That's why the code we added for filtering is in the loader, not the action of this route.

- This also means it's a normal page navigation. You can click the back button to get back to where you were.
```
---

```
- This will help us submit the form on change const submit = useSubmit()
specially for search filtering.
- Now as you type, the form is submitted automatically!
```
---

```
- We can avoid this by replacing the current entry in the history stack with the next page, instead of pushing into it.

- We only want to replace search results, not the page before we started searching, so we do a quick check if this is the first search or not and then decide to replace.

              const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
```

--- 

```
- It's equally as common to want to change data without causing a navigation.
- For these cases, we have the useFetcher hook. It allows us to communicate with loaders and actions without causing a navigation.
- The ★ button on the contact page makes sense for this. We aren't creating or deleting a new record, we don't want to change pages, we simply want to change the data on the page we're looking at.
- Might want to take a look at that form while we're here. As always, our form has fields with a name prop. This form will send formData with a favorite key that's either "true" | "false". Since it's got method="post" it will call the action. Since there is no <fetcher.Form action="..."> prop, it will post to the route where the form is rendered.
```
---

```
- Routes can be used without a path, which lets them participate in the UI layout without requiring new path segments in the URL. 
```
--- 
```
- You can create the routes in the Object or using JSX 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
```