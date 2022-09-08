import React, {useState} from 'react'
import ChooseResponsible from '../../Components/ChooseResponsible/ChooseResponsible';

import DropDown from '../../Components/Dropdown/DropDown';
import Datepicker from '../../Components/Datepicker/Datepicker';
import "./test.css"

export default function Test(props){

    const bands = [
    {
        name: 'Nightwish',
        albums: 9,
        members: 6,
        formed_in: 1996,
    },
    {
        name: 'Metallica',
        albums: 10,
        members: 4,
        formed_in: 1981,
    },
    {
        name: 'Nirvana',
        albums: 3,
        members: 3,
        formed_in: 1987,
    },
    ];

    const tags = [
        {
            id: 1,
            titleTag: 'Excellent Rapport'
        },
        {
            id: 2,
            titleTag: 'First Deal'
        },
        {
            id: 3,
            titleTag: 'Hot Prospect'
        },
        {
            id: 4,
            titleTag: 'Inactive'
        },
        {
            id: 5,
            titleTag: 'Large account'
        },
        {
            id: 6,
            titleTag: 'Long term'
        },
        {
            id: 7,
            titleTag: 'No Potential'
        },
        {
            id: 8,
            titleTag: 'Referral'
        },
        {
            id: 9,
            titleTag: 'VIP'
        },
        {
            id: 10,
            titleTag: 'Repeat Business'
        },

    ]


  return (
    <div className = 'hello'>
        <h1 className = 'datepicker-heading'> Custom 
            <span> Date </span> Picker </h1>
        {/* // <DropDown type = 'sort_dropdown' */}
    {/* //                 data = {tags}/> */}
                    
        <ChooseResponsible />                
        {/* <Datepicker /> */}
    </div>
    
  )
}

