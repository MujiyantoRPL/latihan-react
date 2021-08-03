import React, { Component, Fragment } from "react";
import { Form, Button, Alert } from 'reactstrap';
import Berita from "../component/Berita"
import API from "../services";
import "./Home.css"




class Home extends Component
{
  state = {
    post: [],
    isiPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false
  }

  //get dataa
  getPostAPI = () =>
  {
    API.getData().then((result) =>
    {
      this.setState({
        post: result,
      })

    })
  }

  //post data
  postDataAPI = () =>
  {
    API.postData(this.state.isiPost).then((result) =>
    {
      this.getPostAPI();
      this.setState({
        isiPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        }
      })
    })
  }

  //update data
  updateDataAPI = () =>
  {
    API.updateData(this.state.isiPost, this.state.isiPost.id).then((result) =>
    {
      this.getPostAPI();
      this.setState({
        isiPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
        isUpdate: false,
      })
    })
  }

  //handle perubahan pada post berita
  handlePostChange = (event) =>
  {
    let postNew = { ...this.state.isiPost };
    let waktu = new Date().getTime();
    if (!this.state.isUpdate)
    {
      postNew["id"] = waktu
    }

    postNew[event.target.name] = event.target.value;
    this.setState({
      isiPost: postNew
    })
  }

  //handle update
  handleUpdate = (data) =>
  {
    this.setState({
      isiPost: data,
      isUpdate: true
    })
  }

  //handle hapus data
  handleRemove = (data) =>
  {
    API.deleteData(data).then((result) =>
    {
      this.getPostAPI();

    })
  }

  //handle saat simpan data
  handleSubmit = () =>
  {
    if (this.state.isUpdate)
    {
      this.updateDataAPI();


    } else
    {
      this.postDataAPI();
    }

  }



  componentDidMount()
  {
    this.getPostAPI();
  }

  render()
  {
    return (
      <Fragment>
        <div className="form-berita" >
          <label htmlFor="">title</label>
          <input type="text" name="title" value={this.state.isiPost.title} onChange={this.handlePostChange} />
          <label htmlFor="" className="body-berita">body</label>
          <input type="textarea" name="body" value={this.state.isiPost.body} onChange={this.handlePostChange} />
          <button className="btn btn-primary" onClick={this.handleSubmit}>Simpan</button>
        </div>
        {
          this.state.post.map((post) =>
          {
            return (
              <Berita key={post.id} data={post} update={this.handleUpdate} remove={this.handleRemove} />
            )
          })
        }


      </Fragment>
    )
  }
}

export default Home;
