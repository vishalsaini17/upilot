//Import data screen 1

import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import * as React from 'react';
import { BsFillCloudFill } from 'react-icons/bs';
import { FaFileCsv } from 'react-icons/fa';
import "./ImportData.css";


export default function ImportData() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      width: 200,
    color: "white"
    },
  });
  

  return (
        <div className = 'import-data-wrapper'>
          <div className='import-wrapper'>
            <p style={{fontSize: "40px"}}> Import Data  </p>
            <fieldset className='box-field' align="centre">
            <legend align = 'left' style={{fontSize: '15px'}}> From where would you like to import your contact/deal from?</legend>  
            <p></p>

            <div style={{display: 'flex',  justifyContent:'center'}}>
              <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                <CustomWidthTooltip title={"Insightly, Salesforce, Zoho ..."} arrow>
                  <Tab icon ={<BsFillCloudFill  color= "grey" size= "60px" 
                      onMouseOver={({target})=>target.style.color="#00CBED" }
                      onMouseOut={({target})=>target.style.color="grey"}
                  />} 
                  label="from another CRM" onMouseOver={({target})=>target.style.color="#00CBED" }
                  onMouseOut={({target})=>target.style.color="grey"} />
                </CustomWidthTooltip>

                <Tab icon={<FaFileCsv color= "grey" size= "60px" 
                    onMouseOver={({target})=>target.style.color="#00CBED" }
                    onMouseOut={({target})=>target.style.color="grey"}
                    />} 
                  label=" from a csv file" onMouseOver={({target})=>target.style.color="#00CBED" }
                  onMouseOut={({target})=>target.style.color="grey"}/>
              </Tabs>
          </div>
          <p></p>
          </fieldset>
          </div>
          </div>
  );
}



// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import {FaFileCsv} from 'react-icons/fa' ;
// import {BsFillCloudFill} from 'react-icons/bs';
// import { styled } from '@mui/material/styles';
// import "./ImportData.css";

// export default function ImportData() {

//     const CustomWidthTooltip = styled(({ className, ...props }) => (
//         <Tooltip {...props} classes={{ popper: className }} />
//       ))({
//         [`& .${tooltipClasses.tooltip}`]: {
//           width: 250,
//         color: "white"
//         },
//       });

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
// return(
    
//     <div className = 'import-data-wrapper'>
//          <div className='wrapper'>
//          <h>Import Data </h>
//         <p></p>
//         <fieldset className='box-field' align="centre">
//         <legend align = 'left' style={{fontSize: '15px'}}> From where would you like to import your contact/deal from?</legend>  
//             <p></p>
//         <span class="iconcolor">
            
//         <CustomWidthTooltip title={"Insightly, Salesforce, Zoho ..."} arrow>
//       <Button 
//       size="large"
//       onMouseOver={({target})=>target.style.color="#00CBED" }
//       onMouseOut={({target})=>target.style.color="grey"}>
//         <BsFillCloudFill color= "grey" size= "60px" 
//         onMouseOver={({target})=>target.style.color="#00CBED" } 
//         onMouseOut={({target})=>target.style.color="grey"}/>
//         from another CRM
//         </Button>
//       </CustomWidthTooltip>
//    <Button 
//    size="large" 
//    onMouseOver={({target})=>target.style.color="#00CBED" }
//     onMouseOut={({target})=>target.style.color="grey"}> 
//     <FaFileCsv color= "grey" size= "60px" iconPosition="top"
//     onMouseOver={({target})=>target.style.color="#00CBED" } 
//     onMouseOut={({target})=>target.style.color="grey"}/>  
//     from a csv file
//     </Button>
//    </span>
//   <p></p>
//       </fieldset>

//     </div>
//     </div>
//   );
// }