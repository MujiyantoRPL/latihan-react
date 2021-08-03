import React from 'react';
import "./Post.css";

const Foto = (props) =>
{
    return (
        <div className="post">
            <div className="content">
                <div className="title-photo">{props.data.title}</div>
                <div className="url-photo"><img src={props.data.thumbnailUrl} alt="" /></div>
            </div>

        </div>
    )
}

export default Foto;

