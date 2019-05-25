import React from 'react';
import bg from "./images/bg.JPG";
import userImg from "./images/user.JPG";
import Sidebar from './components/Sidebar';
import ProjectContent from './components/ProjectsContent';
import { connect } from "react-redux";
import { combineReducers } from "redux";
import { sitesRequested, sitesLoaded, sitesError } from "./actions/index";
import ProjectServices from "./services/project-services";

const projectServices = new ProjectServices();

class App extends React.Component {

  componentDidMount() {
    this.props.fetchSites();
  }

  render() {
    const {sites, loading, error} = this.props;
    return (
      <div className="page">
        <div className="main">
          <nav className="navbar">
            <div className="container">
              <div className="navbar_nav">
                <a href="#" className="nav_item">Главная</a>
                <a href="#" className="nav_item">Обо мне</a>
              </div>
            </div>
          </nav>
          <div className="bg_head" style={{backgroundImage: `url(${bg})`}}>
          </div>
          <div className="user_card_wrapper container">
            <div className="user_card" style={{backgroundImage: `url(${userImg})`}} />
          </div>
        </div>
  
        <div className="container">
          <div className="main_content">
            <Sidebar />
            <ProjectContent sites={sites} />
  
          </div>
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = ({sites, loading, error}) => {
  return { sites, loading, error };
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