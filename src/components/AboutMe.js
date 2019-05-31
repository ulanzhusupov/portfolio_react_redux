import React from 'react';

const AboutMe = () => {
  return (
    <div className="aboutme_page">
      <div className="aboutme_wrapper">
        <div className="aboutme_photo">
          <img src="http://placekitten.com/300/300" alt=""/>
        </div>
        <div className="aboutme_text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas fuga mollitia a illo dolores tenetur suscipit autem adipisci nesciunt? Sed fugit obcaecati laudantium? Veritatis esse voluptatem veniam magni qui.</p>
        </div>
        <div className="aboutme_skills">
          <h4>My skills</h4>
          <div className="skills">
            <i className="skill_block">html</i>
            <i className="skill_block">css</i>
            <i className="skill_block">javascript</i>
            <i className="skill_block">react</i>
            <i className="skill_block">redux</i>
            <i className="skill_block">jQuery</i>
            <i className="skill_block">html</i>
            <i className="skill_block">html</i>

          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AboutMe;