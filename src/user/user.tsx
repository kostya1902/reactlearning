import React, {FC} from 'react';
import {IUser} from "../model/usersModel";

type IUserProps = {
    user:IUser
    choose:(user:IUser) => void;
}

const User :FC<IUserProps> = ({user , choose}) => {
    return (
    <div>
            <div key={user.id}>{user.name}<button key={user.id} onClick={()=>{choose(user)}}>Choose</button>
            </div>
    </div>
    );
};

export default User;