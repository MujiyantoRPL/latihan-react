import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Berita from "../component/Berita";
import Home from "../pages/Home";
import Photo from "../pages/Photo";
import Portofolio from "../pages/Portofolio";
import "./IndexUtama.css";

const IndexUtama = () =>
{
  return (
    <Router>
      <Fragment>

        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/portofolio">Portofolio</Link>
          <Link to="/photo">Foto</Link>

        </div>


        <Route path="/" exact component={Home} />
        <Route path="/portofolio" exact component={Portofolio} />
        <Route path="/photo" exact component={Photo} />
      </Fragment>
    </Router>
  );
};

export default IndexUtama;
