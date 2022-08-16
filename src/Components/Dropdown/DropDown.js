import React, { useState } from "react";
import "./DropDown.css";
import Select from "react-select";
      
export default function DropDown(props){

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

        const data =[
          
          {
            value: 1,
            text: 'Add a note',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14px" height="16px" opacity="0.4" ><path fill="none" d="M0 0h24v24H0z"/><path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8z"/></svg>
          },
          {
            value: 2,
            text: 'Call',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14px" height="16px" opacity="0.4"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
          },
          {
            value: 3,
            text: 'Send email',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14px" height="16px" opacity="0.4"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/></svg>
          },
          {
            value: 4,
            text: 'Follow-up',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14px" height="16px" opacity="0.4"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2zm11 9H4v9h16v-9zm-4.964 1.136l1.414 1.414-4.95 4.95-3.536-3.536L9.38 12.55l2.121 2.122 3.536-3.536zM7 5H4v3h16V5h-3v1h-2V5H9v1H7V5z"/></svg>
          }

        ]

        const options=[
          {
            label: 'NSW',
            options: [
              { label: 'Sydney', value: 's' },
              { label: 'Newcastle', value: 'n' },
            ],
          },
          {
            label: 'QLD',
            options: [
              { label: 'Brisbane', value: 'b' },
                           { label: 'Gold coast', value: 'g' },
            ],
          },
          {
            label: 'Other',
            options: [
              { label: 'Canberra', value: 'c' },
              { label: 'Williamsdale', value: 'w' },
              { label: 'Darwin', value: 'd' },
              { label: 'Perth', value: 'p' },
            ],
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
      //search dropdown
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
        //search dropdown
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

//search dropdown
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

//avatar dropdown
//errorrrrrrrrr, avatar not visible
const elements_dropdown = () => {
  return (
    <div className="dropdown-container-large">
      
  <Select
    placeholder="Select User"
    value={selectedOption} 
    options={UserOptions} 
    onChange={handleChange}
    />
    </div>
); 
}

//element dropdown with icons
const icon_dropdown =() => {
  return(
   <div className= 'icon-element'>
    <Select
    placeholder="Select Option"
    value={selectedOption}
    options={data}
    onChange={handleChange}
    getOptionLabel={e => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {e.icon}
        <span style={{ marginLeft: 5 }}>{e.text}</span>
      </div>
    )}
  />
  </div>
  );
}

//section dropdown
//separator line not shown
const section_dropdown =()=> {
  return (
    <div className="dropdown-search-large">

      <Select
      placeholder="- Select City - "
      value={selectedOption}
      options={options}
      onChange={handleChange}
      />
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