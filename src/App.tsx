import React, {FC, useState} from 'react';
import './App.css';
import Users from "./users/users";
import {IUser} from "./model/usersModel";

const App:FC=() => {
    const [user, setUser] = useState<IUser|null>(null)
    const choose=(user:IUser)=>{
        setUser(user)
    }

  return (
    <div>
        {user ? (
            <div className="user-card">
                <h3>Інформація про користувача:</h3>
                <p>ID: {user.id}</p>
                <p>Ім'я: {user.name}</p>
                <p>Логін: {user.username}</p>
                <p>Імейл: {user.email}</p>

            </div>
        ) : (
            <p>Будь ласка, оберіть користувача зі списку</p>
        )}

        <hr></hr>
    <Users choose={choose} />
    </div>

  );
}

export default App;
