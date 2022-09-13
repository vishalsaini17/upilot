// import React from 'react';
// import { CompactPicker } from 'react-color';

// class Colorpicker extends React.Component {
//   state = {
//     displayColorPicker: false,
//   };

//   handleClick = () => {
//     this.setState({ displayColorPicker: !this.state.displayColorPicker })
//   };

//   handleClose = () => {
//     this.setState({ displayColorPicker: false })
//   };



//   render() {
//     return (
//       <CompactPicker
//         color={ this.handleClick }
//         colors={['	#FF0000', '#00FF00', '#0000FF']}
//             onChange={(e) => setCircleColor(e.hex)}/>
//     );
//   }
// }
// export default Colorpicker
import React from "react";
import { CirclePicker, GithubPicker, TwitterPicker } from "react-color";
import './Colorpicker.css'

const colors = [ 
  "#FEF8EC",
  "#9ED1ED",
  "#B2E3D9",
  " #EECA97"
];

class Colorpicker extends React.Component {


  handleChangeComplete = color => {
    console.log("on change complete");
    console.log(color);
  };

  handleChange(color, event) {
    console.log("on change");
    console.log(color);
  }

  render() {
    return (
      <GithubPicker
        colors={colors}
        width="120px"
        triangle = "hide"
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}

export default function Colorr() {
  return <Colorpicker />;
}
