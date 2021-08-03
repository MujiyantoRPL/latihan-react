import React from 'react';
import "./Post.css"
const User = (props) =>
{
    return (
        <div className="post">
            <div className="content">
                <p className="title" >{props.data.name}</p>
                <p>Username : {props.data.username}</p>
                 <p>Email :{props.data.email}</p>
            </div>
            
        </div>
       

    )
}

export default User;