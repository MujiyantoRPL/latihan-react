import React, { Fragment } from 'react';
import "./Post.css"
const Berita = (props) =>
{
    return (
        <Fragment>
            <div className="container">
                <div className="post">
                    <div className="content">
                        <p className="title" >{props.data.title}</p>
                        <p className="body">{props.data.body}</p>
                    </div>
                    <div className="grup-button">
                        <button className="button-update" onClick={() => props.update(props.data)}>
                            Update
                        </button>
                        <button className="button-remove" onClick={() => props.remove(props.data.id)}>
                            Remove
                        </button>
                    </div>
                </div >




            </div>



        </Fragment>



    )
}

export default Berita;