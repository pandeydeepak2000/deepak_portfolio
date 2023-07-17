import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
/* The following line can be included in your src/index.js or App.js file */
import pingImage from './ping.jpg';
import { ListGroup, h1, h2, span } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const projectHandler = ['During my job in Bharat Electronics Limited, I worked on to make interface of weapons system and test on wireshark for communication between two interface',
    'SDLC-Configuration Management For ensuring many and effective document availability and accessibility across the projects.',
    'Purpose:The main purpose of this project was to develop interface of weapons system where we check communication between system to publish and subscribe Data', 'Responsibilities: Requirement elicitation, fixing issues, design &development '
    , 'I have Also Recommendation Letter From My Senior DGM Of  My Department(D&D NCS)']
     const personalProject =['CALCULATOR -Using Html Css Java Script (Ghaziabad) 27th jan 2022  to 28th jan 2023','TO-DO-LIST	- Using Html Css Java Script where we can add our daily task','PORTFOLIO  WEBSITE - Using Html Css Java Script in react js']
     const educationalQualification =['B.Tech in Computer Science(2019-2021)Accurate Institute of Management, (Greater Noida)','Class XII, (2016) BSEB Board, ideal Public School  (Bihar)','Class X,CBSE Board (2014)']
     const strength = [' I am passionate about my profession and always been honest towards my work','I am capable of managing dynamic switching on various technologies','I love to go deep in problems and able to find its best solution']

// <div className='Right-section'>
//             <h2 className='heading2'>STRENGTH</h2>
//             <span className='content'>• I am passionate about my profession and always been honest towards my work</span>
//             <span className='content'>•	I am capable of managing dynamic switching on various technologies. </span>
//             <span className='content'>•	I love to go deep in problems and able to find its best solution
//             </span>
//           </div>
  return (
    <div className="App">

      <div className='boy doc'>
        <h1 className='heading'>
          Resume
        </h1>
      </div>
      <div className='left-right-parent'>

        <div className="left">
          <div className='left-section'>
            <div className='photo'></div>
          </div>


          <div className='left-section'>
            <h2 className='heading2'>{'Contact'.toUpperCase()}</h2>
            <span className='content'>Deepak Pandey</span>
            <span className='content'>+918541926334</span>
            <span className='content'>pandeydeepakcse123@gmail.com</span>
          </div>
          <div className='left-section'>
            <h2 className='heading2'>{"Carrer Objective".toUpperCase()}</h2>
            <span className='content'>To serve the organization to the best of my abilities and to gain immense practical exposure; become professionally trained to handle critical situations in the field of software development. I am seeking a responsible position to utilize my technical skills for an integrated development of the organization and myself</span>

          </div>
          <div className='left-section'>
            <h2 className='heading2'>{"Language".toUpperCase()}</h2>
            <span className='content'>English</span>
            <span className='content'>Hindi</span>
            <span className='content'>Bhojpuri</span>

          </div>
          <div className='left-section'>
            <h2 className='heading2'>SKILLS</h2>
            <span className='content'>Programming Languages: HTML,CSS</span>
            <span className='content'>Technologies/Framework:C++, python, JavaScript,-Tools & Utilities: VS Code, QT Creator, Postman, Wireshark</span>
            <span className='content'>Database:  Mongo Db</span>

          </div>
        </div>
        <div className="right">
          <div className='Right-section ' >
            <h2 className='heading2'>PROFESSIONAL EXPERIENCE</h2>
            <span className='content'>Bharat Electronics Limited (Ghaziabad) 27th jan 2022  to 28th jan 2023</span>
            <span className='content'>Job Profile: Training Engineer </span>
            <span className='content'>Job Definition:  Interface Development & maintenance </span>
          </div>
          <div className='Right-section  ' >
            <h2 className='heading2'>PROJECT HANDLED </h2>
            <BulletList className='Project-Handler'
              items={projectHandler}
            />

          </div>
          <div className='Right-section '>
            <h2 className='heading2'>PERSONAL PROJECT </h2>
            <BulletList1 className='personal-Project'
              items={personalProject}
            />

          </div>
          <div className='Right-section '>
            <h2 className='heading2'>EDUCATIONAL QUALIFICATION </h2>
            <BulletList2 className='educational-Qualification'
              items={educationalQualification}
            />
          </div>
          <div className='Right-section '>
            <h2 className='heading2'>STRENGTH </h2>
            <BulletList3 className='strength'
              items={strength}
            />
          </div>

          {/* /* <div className='Right-section'>
            <h2 className='heading2'>PERSONAL PROJECT</h2>
            <span className='content'>• CALCULATOR -Using Html Css Java Script (Ghaziabad) 27th jan 2022  to 28th jan 2023</span>
            <span className='content'>• TO-DO-LIST	- Using Html Css Java Script where we can add our daily task. </span>
            <span className='content'>• PORTFOLIO  WEBSITE - Using Html Css Java Script in react js</span>
          </div> */ }

          

        </div>


      </div>
    </div>


  );
}

export default App;
const BulletList = ({ items }) => {
  // personalProject

  return (
    <ul className='Project-Handler '>
      {items.map((item, index) => (
        <li  className = 'content' key={index}>{item}</li>
      ))}
    </ul>
  );
};
const BulletList1 = ({ items }) => {

  return (
    <ul className='personal-Project '>
      {items.map((item, index) => (
        <li className = 'content' key={index}>{item}</li>
      ))}
    </ul>
  );
};

const BulletList2 = ({ items }) => {
  return (
    <ul className='educational-Qualification '>
      {items.map((item, index) => (
        <li className = 'content' key={index}>{item}</li>
      ))}
    </ul>
  );
};
const BulletList3 = ({ items }) => {
  return (
    <ul className='strength '>
      {items.map((item, index) => (
        <li className = 'content' key={index}>{item}</li>
      ))}
    </ul>
  );
};

