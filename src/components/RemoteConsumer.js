import React from 'react';
import { useFetch } from "./UseFetch";

function RemoteConsumer (props){ 


  const [data, loading] = useFetch(
    "https://reqres.in/api/users"
  );
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.data.map(({ id, first_name, email }) => (
            <li key={id}>
              {first_name} {email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default RemoteConsumer;
