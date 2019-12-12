import React from 'react';

const RemoteConsumer = ({ users }) => {
  return (
    <div className="users-panel">
      <center><h1>Users</h1></center>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div className="card-body row">
            <div className="card-avatar col-4 col-md-2">
              <img src={user.avatar}></img>
            </div>
            <h4 className="card-title col-6 col-md-8">{user.first_name} {user.last_name}</h4>
            <div className="card-email col-2 col-md-2"> <a href={"mailto:" + user.email}><li className="fa fa-envelope"></li></a> </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default RemoteConsumer
