import React, { useState } from "react";
import "./Dropdown.css";
import { Dropdown } from 'semantic-ui-react';
import Select from 'react-select';
import 'remixicon/fonts/remixicon.css'
import 'rsuite/dist/rsuite.min.css';
      
export default function Dropdown_menu(props){
      
        const [selectedOption, setSelectedOption] = useState("");
        const optionlist=[
            {value:"red", label: "Red" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
            { value: "blue", label: "Blue" },
            { value: "white", label: "White" }
        ];
        const UserOptions = [
          {
            label: 'Charlotte',
            value: 'Charlotte',
            image: { avatar: true, src: '/images/avatar/small/Charlotte.jpg' },
          },
          {
            label: 'Nadard',
            value: 'Nadard',
            image: { avatar: true, src: '/images/avatar/small/Nadard.jpg' },
          },
          {
            label: 'Rosario',
            value: 'Rosario',
            image: { avatar: true, src: '/images/avatar/small/Rosario.jpg' },
          },
        ]
        
        // handle onChange event of the dropdown
        const handleChange = e => {
          setSelectedOption(e);
        }
        const simple_dropdown_small=()=>{
        return (
          <div className="dropdown-container-small">
           
            
            <Select
              placeholder="Select Option"
              value={selectedOption} 
              options={optionlist} 
              onChange={handleChange} // assign onChange function
            />
      
           </div>
             
        );
      }
        const simple_dropdown_medium=()=>{
            return (
              <div className="dropdown-container-medium">
                
                <Select
                  placeholder="Select Option"
                  value={selectedOption} 
                  options={optionlist} 
                  onChange={handleChange} // assign onChange function
                />
          
               </div>
                 
            );
            }
        
    const simple_dropdown_large=()=>{
        return (
          <div className="dropdown-container-large">
            
            <Select
              placeholder="Select Option"
              value={selectedOption} 
              options={optionlist} 
              onChange={handleChange} // assign onChange function
            />
      
           </div>
             
        );
    
}

const search_dropdown_large=()=>{
    return (
      <div className="dropdown-search-large">
        
        
        <Select
          placeholder="Choose Option"
          value={selectedOption} 
          options={optionlist} 
          onChange={handleChange}
        />
  
       </div>
         
    );
}

//errorrrrrrrrr, avatar not visible
const elements_dropdown = () => {
  return (
    <div className="dropdown-container-large">
      
  <Dropdown
    placeholder="Select User"
    value={selectedOption} 
    options={UserOptions} 
    onChange={handleChange}
    />
    </div>
); 
}


//errorrrr weird formatting
const icon_dropdown =() =>{
  return (
    <div className="dropdown-search-large">
  

<Dropdown
    text='- Choose action - '
    floating
    labeled
    button
  
    className="icon"
  >
    <Dropdown.Menu>
      <Dropdown.Divider />
      <Dropdown.Item 
       icon="ri-chat-3-line" style= {{height: '12.4px',
  width: '14px', opacity: '0.4px', background: '#4C4A5C'} }text='Add a note'/>
      <Dropdown.Item icon='ri-phone-line'style= {{height: '12.91px',
  width: '14px', opacity: '0.4px', background: '#4C4A5C'} } text='Call' />
      <Dropdown.Item icon='ri-send-plane-line' style= {{height: '11.02px',
  width: '16px', opacity: '0.9px', background: '#4C4A5C'} }text='Send email' />
      <Dropdown.Item icon='F'style= {{height: '14px',
  width: '10.62px', opacity: '0.4px', background: '#4C4A5C'} } text='Follow-up' />


    </Dropdown.Menu>
  </Dropdown>
  </div>
);
}

//errorrr no outputttt
const section_dropdown =()=> {
  return (
    <div className="dropdown-search-large">
      
<Dropdown title="- Select club -">
    <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
      <p>ENGLISH CLUBS: </p>
    </Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>United</Dropdown.Item>
    <Dropdown.Item>City</Dropdown.Item>
    <Dropdown.Item>Liverpool</Dropdown.Item>
    <Dropdown.Item divider />
    <p>SPANISH CLUBS: </p>
    <Dropdown.Item>Real</Dropdown.Item>
    <Dropdown.Item>Barca</Dropdown.Item>
    <Dropdown.Item>Athletico</Dropdown.Item>
    <p>OTHER: </p>
    <Dropdown.Item>PSG</Dropdown.Item>
    <Dropdown.Item>Bayern</Dropdown.Item>
    <Dropdown.Item>Inter</Dropdown.Item>
  </Dropdown>
      </div>
  );
}

if (
    props.size === "small" &&
    props.shape === "simple_dropdown"
  ) {
    return <div>{simple_dropdown_small()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "simple_dropdown"
  ) {
    return <div>{simple_dropdown_medium()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "simple_dropdown"
  ) {
    return <div>{simple_dropdown_large()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "search_dropdown_large"
  ) {
    return <div>{search_dropdown_large()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "elements_dropdown"
  ) {
    return <div>{elements_dropdown()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "icon_dropdown"
  ) {
    return <div>{icon_dropdown()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "section_dropdown"
  ) {
    return <div>{section_dropdown()}</div>;
  }

}