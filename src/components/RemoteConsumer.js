import React from 'react';
import { useFetch } from "./UseFetch";
import User from './User';

function RemoteConsumer (props){ 

  const [data, loading] = useFetch(
    "https://reqres.in/api/users"
  );
  return (
    <>
      
      {loading ? (
        <div className="loading-panel">Loading...</div>
      ) : (

        <div className="app container">
          <User users={data.data} />
        </div>
      )}
    </>
  );
}
export default RemoteConsumer;
