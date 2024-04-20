import { Outlet, Link, useLoaderData, Form } from 'react-router-dom'
import { getContacts, createContact } from '../contacts'
export async function loader() {
  const contacts = await getContacts()
  return { contacts }
}

export async function action() {
  const contact = await createContact()
  return { contact }
}
export default function Root() {
  const { contacts } = useLoaderData()
  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <Form method='post'>
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
