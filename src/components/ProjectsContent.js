import React from 'react';
import prjItem from "../images/site4.JPG";
import Sidebar from "./Sidebar";


const ProjectContent = ({ sites }) => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="content_wrap">
        <div className="content_header">
          <h2>Избранное</h2>
        </div>
        <div className="content_content">
          <div className="projects">
            {sites.map(item =>
              (<div className="projects_item">
                <div className="projects_item_bg" style={{backgroundImage: `url(${item.imgSrc})`}}></div>
                <div className="projects_item_text">
                  <h4 className="projects_item_text_header">{item.title}</h4>
                  <a href={item.url} className="btn visit_btn">Visit site</a>
                  <a href="#" className="btn visit_git">View code</a>
                </div>
              </div>)
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
 
export default ProjectContent;