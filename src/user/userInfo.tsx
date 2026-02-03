import React, {FC} from 'react';
import {IUser} from "../model/usersModel";

interface InfoProps {
    user: IUser| null;
    clear:()=>void;
}

const UserInfo:FC<InfoProps> = ({user, clear}) => {
    return (
        <div>
            {user ? (
                <div className="user-card">
                    <h3>Інформація про користувача:</h3>
                    <p>ID: {user.id}</p>
                    <p>Ім'я: {user.name}</p>
                    <p>Логін: {user.username}</p>
                    <p>Імейл: {user.email}</p>
                    <button onClick={clear}>Очистити</button>

                </div>
            ) : (
                <p>Будь ласка, оберіть користувача зі списку</p>
            )}
        </div>
    );
};

export default UserInfo;