import React from 'react';
import { Router, Redirect, Link } from "@reach/router";

import { connect } from "react-redux";
import { combineReducers } from "redux";
import { sitesRequested, sitesLoaded, sitesError } from "./actions/index";

import ProjectContent from './components/ProjectsContent';
import ProjectServices from "./services/project-services";
import AboutMe from "./components/AboutMe";
import NotFound from './components/NotFound';

import bg from "./images/bg.JPG";
import userImg from "./images/user.JPG";

const projectServices = new ProjectServices();

class App extends React.Component {

  componentDidMount() {
    this.props.fetchSites();
  }

  render() {
    const {sites, loading, error, sortBy} = this.props;
    return (
        <div className="page_grid">
          <div className="main">
            <nav className="navbar">
                  <div className="navbar_nav"><Link to="/" className="nav_item">Главная</Link>
                  <Link to="/projects" className="nav_item">Работы</Link>
                  <Link to="/aboutme" className="nav_item">Обо мне</Link></div>
            </nav>
          </div>
    
          <div className="content_item">
            
              <Router>
                <ProjectContent path="/projects" />
                <AboutMe path="/aboutme" />
              </Router>
            
          </div>
        </div>
    );
  }
  
}

const mapStateToProps = ({ sites, loading, error, sortBy }) => {
  return { sites, loading, error, sortBy };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSites: () => {
      dispatch(sitesRequested());
      projectServices.getProjects()
        .then(data => dispatch(sitesLoaded(data)))
        .catch(err => dispatch(sitesError(err)));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);