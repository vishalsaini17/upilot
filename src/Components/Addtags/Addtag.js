import React from 'react'

import CloseLine from "remixicon-react/CloseLineIcon";
import SearchLine from "remixicon-react/SearchLineIcon"
import Dropdown from "../DropDown/Dropdown";
import Button from "../Button/Button"
import "./Addtags.css"

export default function Addtag(){

    const tags = [
        {
            id: 1,
            title: 'Excellent Rapport'
        },
        {
            id: 2,
            title: 'First Deal'
        },
        {
            id: 3,
            title: 'Hot Prospect'
        },
        {
            id: 4,
            title: 'Inactive'
        },
        {
            id: 5,
            title: 'Large account'
        },
        {
            id: 6,
            title: 'Long term'
        },
        {
            id: 7,
            title: 'No Potential'
        },
        {
            id: 8,
            title: 'Referral'
        },
        {
            id: 9,
            title: 'Repeat Business'
        },
        {
            id: 10,
            title: 'VIP'
        },

    ]

  return (
    <div className = 'addtag-wrapper'>
        <h1 className="addtag-heading">
                Add or remove tags
                <i className = "close-ic"> <CloseLine /> </i>
        </h1>
        <div className="addtag-object">
            <div className="addtag-body">
                <div className="addtag-search">
                    <input
                        className = 'addtag-searchbar'
                        type = "text"
                        id = "searchbar"
                        name = "addtag-searchbar"
                        style = {{height: '50px'}}
                    />
                    <i><SearchLine/></i>
                    <text> Sort by </text>
                    <Dropdown size = "small"
                        shape = "simple_dropdown"/>
                </div>
                <div className="addtag-taglist">
                    <ul className = 'taglist'>
                        {tags.map((tag) => {
                            return(
                                <li key = {tag.id}>
                                    <div
                                        className = 'tag'
                                        key = {tag.title}>
                                        {tag.title}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="addtag-footer" >
                <button className = 'close-btn'> Close </button>
                <Button type = 'submit'
                        text= 'Apply'
                        shape = 'square'
                        size = 'xsmall'
                        color = 'primary' />
            </div>
        </div>
    </div>
  )
}

