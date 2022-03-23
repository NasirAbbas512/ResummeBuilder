import React, { useState } from 'react';
import { Stepper, Step,StepLabel, Button,Container} from '@material-ui/core';
import BasicInfo from './Components/BasicInfo';
import Education from './Components/Education';
import PersonalInfo from './Components/PersonalInfo';
import PersonalProjects from './Components/PersonalProjects';
import WorkExpirience from './Components/WorkExperience';
import Skills from './Skills';
import ResumePreview from './Components/ResumePreview';
import Interest from './Components/Interest';
import "./Linearstepper.css";

function getSteps()
{
    return[
        "Basic Information",
        "Personal Information",
        "Education",
        "Personal Projects",
        "Work Experience",
        "Skills",
        "Interest"
    ]
}

const LinearStepper = () => {
    const [activeStep,setActiveStep]=useState(0);

    //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phNumber: "",
    adress: "",
    country: "",
    
  })

  //Handle form value state on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({...multiFormValues, [input]: e.target.value});
  }
  //Handle Image state on change
  const handleImage = (input) => (e) => {
    setMultiFormValues({...multiFormValues, [input]: e.target.value});
  }

    const steps=getSteps();
    const handleNext=()=>{
            setActiveStep(activeStep + 1)
            
    };

    const handleBack=()=>{
        setActiveStep(activeStep - 1)
    };

    function getStepContent(step){
        switch(step)
        {
            case 0 :
                return <BasicInfo values={multiFormValues} handleChange={handleChange}
                 handleImage={handleImage}/>

            case 1 :
                return <PersonalInfo values={multiFormValues} handleChange={handleChange}/>

            case 2 :
                return <Education EduInputFields={EduInputFields} setEduInputFields={setEduInputFields}/>

            case 3 :
                return <PersonalProjects PersonalInputFields={PersonalInputFields}
                 setPersonalInputFields={setPersonalInputFields}/>

            case 4 :
              return <WorkExpirience ExperienceInputFields={ExperienceInputFields} 
                setExperienceInputFields={setExperienceInputFields}
              />

            case 5 :
              return <Skills SkillsInputFields={SkillsInputFields} 
                setSkillsInputFields={setSkillsInputFields}
              />

            case 6 :
              return <Interest interestInputFields={interestInputFields} 
                setInterestInputFields={setInterestInputFields}
              />
        }
    }

     //Handle Education Form
     const [EduInputFields, setEduInputFields] = useState([
        { degree: '', institute: ''},
      ]);

    //Handle Personal Projects Form
    const [PersonalInputFields, setPersonalInputFields] = useState([
      { project: '', startDate: '' },
    ]);
    
    //Handle Experience Form
    const [ExperienceInputFields, setExperienceInputFields] = useState([
      { expirience: '', company: '',startDate:'',endDate:'' },
    ]);

    //Handle Skills Form
    const [SkillsInputFields, setSkillsInputFields] = useState([
      { skill: '' },
    ]);

    //Handle Interest Form
    const [interestInputFields, setInterestInputFields] = useState([
      { interest: '' },
    ]);
    
     
  return (
    <div>
        
        {
            activeStep === 7 ? (
                <ResumePreview  values={multiFormValues} Educationvalues={EduInputFields}
                 PersonalValues={PersonalInputFields} ExperienceValues={ExperienceInputFields}
                   skillValues={SkillsInputFields} interestValue={interestInputFields}
                 />
            )
            :(
                <Container className='Container' >
                    <Stepper activeStep={activeStep}>
                        {
                            steps.map( (step,index)=>{
                                return(
                                    <Step key={index} className='step'>
                                        <StepLabel className='stepLabel'>{step}</StepLabel>
                                    </Step>
                                )
                            })
                        }
                    </Stepper>
                    {getStepContent(activeStep)}

                    <div className='back_next_btns'>
                      <div className='btn_Back'>
                        <Button variant='contained' onClick={handleBack}
                        disabled={activeStep === 0} color="primary">Back</Button>
                      </div>
                    
                      <div className='btn_Next'></div>
                        <Button variant='contained' onClick={handleNext} color="primary">
                        {
                            activeStep === 6 ? "Create Cv":"Next"
                        }
                      </Button>
                    </div>
                    
                </Container>
            )
        }
        
    </div>
  )
}

export default LinearStepper