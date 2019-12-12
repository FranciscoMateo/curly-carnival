import React from 'react';

const RemoteConsumer = ({ users }) => {
  return (
    <div className="users-panel">
      <center><h1>Users</h1></center>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div className="card-body">
            <div className="card-avatar">
              <img src={user.avatar}></img>
            </div>
            <h4 className="card-title">{user.first_name} {user.last_name}</h4>
            <div className="card-email"> <a href={"mailto:" + user.email}>email</a> </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default RemoteConsumer
