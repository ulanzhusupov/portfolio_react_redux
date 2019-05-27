import React, { useState } from 'react';
import { connect } from "react-redux";
import { sortBy } from "../actions";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar_menu">
        <h3 className="sidebar_menu_item">Категории</h3>
        <button onClick={(e)=> {
          e.preventDefault();
          props.setDispatchSortBy("favourite")
        }} className="sidebar_menu_item">Избранное</button>
        <button onClick={(e)=> {
          e.preventDefault();
          props.setDispatchSortBy("react and redux")
        }} className="sidebar_menu_item">React & Redux</button>
        <button onClick={(e)=> {
          e.preventDefault();
          props.setDispatchSortBy("landing page")
        }} className="sidebar_menu_item">Landing pages</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDispatchSortBy: (srtBy) => dispatch(sortBy(srtBy))
  }
};

 
export default connect(
  null,
  mapDispatchToProps
)(Sidebar);