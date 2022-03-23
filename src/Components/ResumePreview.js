import React from 'react';
import { Container } from '@material-ui/icons';
import "./ResumePreview.css";
import {GrMail} from "react-icons/gr";
import {GoDeviceMobile} from "react-icons/go";
import {ImLocation} from "react-icons/im";


const ResumePreview = ({values,Educationvalues,PersonalValues,ExperienceValues,skillValues,interestValue}) => {
    const {firstName, lastName, email, phNumber,adress,country,} = values;
  return (
    <div className='mian_container'>
      <div className='resume_header'>
        <div className='header_right'>
          <h1>{firstName} {lastName}</h1>
        </div>

        <div className='header_left'>
          <div className='header_left_content'>
            <h3>{email}</h3>
            <i><GrMail/></i>
          </div>
          <div className='header_left_content'>
            <h3>{phNumber}</h3>
            <i><GoDeviceMobile/></i>
          </div>
          <div className='header_left_content'>
            <h3>{adress}</h3>
            <i><ImLocation/></i>
          </div>
        </div>
      </div>

      <div className='hero_section'>
          <div className='hero_left'>
              <div className='Education'>
                <h1>EDUCATION</h1>
                {
                  Educationvalues.map( (curElem) =>{
                    return(
                    <div className='education_content'>
                      <div className='education_title'>
                        <h2>{curElem.degree}</h2>
                        <h3>{curElem.institute}</h3>
                        <h3>{curElem.startDate}</h3>
                      </div>
                      
                    </div>
                    )
                  })
                }
              </div>

              <div className='personal_projects'>
                <h1>PERSONAL PROJECTS</h1>
                {
                  PersonalValues.map( (val) =>{
                    return(
                    <div className='education_content'>
                      <div className='education_title'>
                        <h2>{val.project}</h2>
                        <h3>{val.startDate}</h3>
                      </div>
                      
                    </div>
                    )
                  })
                }
              </div>

              <div className='experience_projects'>
                <h1>WORK EXPERIENCE </h1>
                {
                  ExperienceValues.map( (val) =>{
                    return(
                    <div className='education_content'>
                      <div className='education_title'>
                        <h2>{val.expirience}</h2>
                        <h3>{val.company}</h3>
                        <h4>{val.startDate}</h4>
                        <h4>{val.endDate}</h4>
                      </div>
                      
                    </div>
                    )
                  })
                }
              </div>
          </div>
          <div className='hero_right'>
            <div className='skills'>
              <h1>SKILLS AND COMMPETENCIES</h1>
              {
                skillValues.map( (val) =>{
                    return(
                        <div className='skill_content'>
                          <h4>{val.skill}</h4>
                        </div>
                        
                    )
                  })
                }
            </div>

            <div className='interest'>
              <h1>Interests</h1>
              <div className='interest_content'>
                {
                  interestValue.map( (val) =>{
                    return(
                          <h4>{val.interest}</h4>
                      )
                  })
                }
              </div>
            </div>
          </div>
      </div>
      
        
        
    </div>
  )
}

export default ResumePreview