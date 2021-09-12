import {Summary, JavaScript, Education, ReactProjects} from ".";

export const RightPart = (props) =>{

    return (
     <div className='right-part'>
        <Summary/>
        <JavaScript/>
        <ReactProjects/>
        <Education />
     </div>
    )
}