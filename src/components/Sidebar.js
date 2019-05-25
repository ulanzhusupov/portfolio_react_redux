import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_menu">
        <h3 className="sidebar_menu_item">Категории</h3>
        <a href="#" className="sidebar_menu_item">Избранное</a>
        <a href="#" className="sidebar_menu_item">React & Redux</a>
        <a href="#" className="sidebar_menu_item">Landing pages</a>
      </div>
    </div>
  );
}
 
export default Sidebar;