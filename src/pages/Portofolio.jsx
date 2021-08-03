import React, { Component, Fragment } from "react";
import User from "../component/User"
import API from "../services";



class Portofolio extends Component
{
  state = {
    user: [],
  }
  getUserApi = () =>
  {
    API.getUser().then((result) =>
    {
      this.setState({
        user: result
      })
    })
  }

  componentDidMount()
  {
    this.getUserApi();
  }
  render()
  {
    return (
      <Fragment>
        <p>Data User</p>
        <hr />
        {
          this.state.user.map((user) =>
          {
            return (
              <User key={user.id} data={user} />
            )
          })
        }
      </Fragment>
    )
  }
}

export default Portofolio;
