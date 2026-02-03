import React, {FC, useState} from 'react';
import './App.css';
import Users from "./users/users";
import {IUser} from "./model/usersModel";
import UserInfo from "./user/userInfo";
import Posts from "./posts/posts";
import "./style/css.css"
import Coments from "./coments/coments";


const App:FC=() => {
    const [user, setUser] = useState<IUser|null>(null)
    const choose=(user:IUser)=>{
        setUser(user)
    }

  return (
    <div className="main_div">
        <div>
            <UserInfo user={user} clear={()=>setUser(null)}/>
            <hr></hr>
            <Users choose={choose} />
        </div>
        <hr></hr>
        <div className="box_duo">
            <div className='box_one'><Posts/></div>
            <div className='box_one'><Coments/></div>
        </div>
    </div>

  );
}

export default App;
