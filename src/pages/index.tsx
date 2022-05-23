import { Admin, Resource } from 'react-admin';
import { UserList } from '../components/users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function Home() {
  return (
    
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        {/* <Resource name="districts" list={UserList} /> */}
    </Admin>
    
  )
}
