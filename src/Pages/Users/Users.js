import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import { Link } from 'react-router-dom';
import User from '../../Components/User/User';

const Users = () => {
  const {users, setUsers} = useContext(GlobalContext);

  console.log(users);

  const deleteUser = (id) => {
    setUsers((currUsers) => {
      return currUsers.filter((user) => user.id !== id);
    });
  };

  return (
    <div className="users">
      <h1 className="users_title">Users</h1>
      <div className="users_container">
        {
          users.length === 0 ? (
            <div className="users_empty">
              <h1>No found. please add some.</h1>
              <h3>
                <Link to="/">Add Users</Link>
              </h3>
            </div>
          ) : (
            users.map((user)=>{
              return (
                <User 
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  jobRole={user.jobRole}
                  age={user.age}
                  contact={user.contact}
                  email={user.email}
                  deleteUser={() => deleteUser(user.id)}
                />
              )
            })
          ) 
        }
      </div>
    </div>
  )
}

export default Users;