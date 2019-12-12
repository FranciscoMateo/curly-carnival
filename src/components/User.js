import React from 'react';


function User (props){
    return (
        <div className="users-panel">
          <center><h1>Users</h1></center>
          {props.users.map(({ id, first_name, last_name, email, avatar }) => (
            <div className="card" key={id}>
              <div className="card-body row">
                <div className="card-avatar col-4 col-md-2">
                  <img src={avatar}></img>
                </div>
                <h4 className="card-title col-6 col-md-8">{first_name} {last_name}</h4>
                <div className="card-email col-2 col-md-2"> <a href={"mailto:" + email}><li className="fa fa-envelope"></li></a> </div>
              </div>
            </div>
          ))}
        </div>
      )
}


export default User;