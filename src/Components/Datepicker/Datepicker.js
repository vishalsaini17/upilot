import React, {useState} from 'react';
import "./Datepicker.css"

export default function Datepicker() {
    const [datepicker, showDatePicker] = useState(false);
    const toggleDatePicker = () => {
        showDatePicker(!datepicker);
    }


  return (
    <div className="date-picker" >
        <div className="selected-date" onClick = {() => toggleDatePicker()}> 30 / 07 / 2019</div>
        <div className= {datepicker ? 'dates-active' : 'dates'}
            >
            <div className="month">
                <div className="arrows prev-mth">&lt;</div>
                <div className="mth"></div>
                <div className="arrows next-mth">&gt;</div>
            </div>

            <div className="days"></div>
        </div>
    </div>
  )
}

