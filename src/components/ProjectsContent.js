import React, { useState, useEffect } from 'react';
import prjItem from "../images/site4.JPG";
import { connect } from "react-redux";
import { sortBy } from "../actions";


// import { connect } from "react-redux";
// import { sitesRequested, sitesLoaded, sitesError } from "./actions/index";


function ProjectContent({ sites, sortBy, setDispatchSortBy }) {
  const [stateSortBy, setStateSortBy] = useState("Все работы");
  
  useEffect(() => {
    setDispatchSortBy(stateSortBy);
  }, [stateSortBy]);
  const handleChangeSelect = (e) => {
    setStateSortBy(e.target.value);
  };

  return (
    <div className="main_content">
      <div className="content_wrap">
        <div className="content_header">
          <h2>{stateSortBy}</h2>
          <span>Сортировать по</span>
          <select value={stateSortBy} onChange={handleChangeSelect} name="select" id="select">
            <option value="Все работы">Все работы</option>
            <option value="Избранное">Избранное</option>
            <option value="React and Redux">React & Redux</option>
            <option value="Landing Page">Landing pages</option>
          </select>
        </div>
        <div className="content_content">
          <div className="projects">
            {sites.map(item =>
              item.category.indexOf(sortBy) !== -1 ?
              (<div key={item.title} className="projects_item">
                <div className="projects_item_bg" style={{backgroundImage: `url(${item.imgSrc})`}}></div>
                <div className="projects_item_text">
                  <h4 className="projects_item_text_header">{item.title}</h4>
                  <a href={item.url} className="btn visit_btn">Visit site</a>
                  <a href="#" className="btn visit_git">View code</a>
                </div>
              </div>) : <div key={item.title} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ sites, sortBy }) => {
  return { sites, sortBy };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setDispatchSortBy: (srtBy) => dispatch(sortBy(srtBy))
  }
};

 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectContent);