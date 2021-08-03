import React, { Component, Fragment } from 'react';
import API from '../services';
import Foto from '../component/Foto'



class Photo extends Component
{
    state = {
        photo: [],
    }

    getFoto = () =>
    {
        API.getPhoto().then((result) =>
        {
            this.setState({
                photo: result
            })
        })
    }

    componentDidMount()
    {
        this.getFoto();
    }
    render()
    {
        return (
            <Fragment>
                {
                    this.state.photo.map((photo) =>
                    {
                        return (
                            <Foto key={photo.id} data={photo} />
                        )
                    })
                }
            </Fragment>




        )
    }
}

export default Photo;