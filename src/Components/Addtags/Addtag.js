import React, { useEffect, useState, useRef } from 'react'

import CloseLine from "remixicon-react/CloseLineIcon";
import SearchLine from "remixicon-react/SearchLineIcon"
import Dropdown from "../Dropdown/DropDown";
import Button from "../Button/Button";
import Input from '../Input/Input';
import "./Addtags.css"

export default function Addtag(props){
    const {setTrigger, trigger} = props
    // const [trigger, setTrigger] = useState(true)

    const [titleTag, setTitleTag] = useState('');
    const [tagList, setTagList] = useState([]);
    const [typeNewTag, setTypeNewTag] = useState(false);
    

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

    const [tagState, setTagState] = useState(
        new Array(tags.length).fill(false));


    const addTagSubmit = (e) => {
        e.preventDefault();
        console.log(titleTag);
        if (titleTag){
            const newTag = { id : new Date().getTime().toString(),
                            titleTag}
        setTagList((tagList) => {
            return [newTag, ...tagList]
        })
        setTitleTag('')
        } else {
            alert('Please enter a valid tag')
        }
    }

    const fetchTagList = () => {
        setTagList(tags)
    }

    useEffect(() => {
        fetchTagList();
    }, []);

    

    const handleOnClick = (pos) => {
        const updatedTagState = tagState.map((item, index) => 
            index === pos ? !item: item);

        setTagState(updatedTagState)
        // console.log(updatedTagState)
    }

    const returnClassname = (pos) => {
        if (tagState[pos]){
            return "tag active"
        } else {
            return "tag"
        }
    }


    // handle onClick and Click outside for add new tag
    const addNewTag = () => {
        setTypeNewTag(true)
    }

    const handleClickOutside = () => {
        setTypeNewTag(false);
    }

    const useOutsideClick = (callback) => {
        const ref = React.useRef();

        React.useEffect(() => {
            const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        console.log('debugging handle click outside')

        document.addEventListener('click', handleClick);

         return () => {
            document.removeEventListener('click', handleClick);
            };
        }, [ref]);

        return ref;
    };
    const ref = useOutsideClick(handleClickOutside);

  return (trigger) ? (
    <div className = 'addtag-wrapper'>
        <h1 className="addtag-heading">
                Add or remove tags
                <i className = "close-ic"
                    onClick = {() => setTrigger(false)}> 
                    <CloseLine /> 
                </i>
        </h1>
        <div className="addtag-object">
            <div className="addtag-body">
                <div className="addtag-search">
                    <div className = 'search-container'>
                        <form action="/search" method="get">
                            <input className="search expandright" id="searchright" 
                                    type="search" 
                                    name="q" 
                                    placeholder="Quick Search" />
                            <label className="button searchbutton" 
                                    for="searchright">
                                    <span class="search-ic"><SearchLine/></span>
                            </label>
                        </form>
                    </div>

                    <div>
                        <text> Sort by: </text>
                        {/* <Dropdown type = 'sort_dropdown'
                                data = {tagList}/> */}
                    </div>
                </div>
                <div className="addtag-taglist">
                    <ul className = 'taglist'>
                        {tagList.map((tag, index) => {
                            return(
                                <li key = {tag.id}>
                                    <div
                                        id = {`tag-${index}`}
                                        className = {returnClassname(index)}
                                        onClick = {() => handleOnClick(index)}
                                        key = {tag.titleTag}>
                                        {tag.titleTag}
                                    </div>
                                </li>
                            )
                        })}
                        <li>

                            {typeNewTag ? 
                        
                            <div className = 'submit-new-tag' ref = {ref}>
                                <Input type = 'text'
                                        placeholder = 'Enter a new tag'
                                        size = 'normal' 
                                        value = {titleTag}
                                        onChange = {(e) => setTitleTag(e.target.value)}
                                        futureStyle = {{fontSize: '12px', border: 'none'}}/>
                                <Button type = 'submit'
                                        onClick = {addTagSubmit}
                                        color = 'primary'
                                        text = 'Add tag'
                                        size = 'medium'
                                        shape = 'square'
                                        futureStyle = {{width: '85px', fontSize: '11px', marginRight: '-2px'}}
                                    />
                            </div>
                            :
                            <div className = 'addnew-tag'
                                onClick = {addNewTag}>
                                + New tag
                            </div>
                            }
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="addtag-footer" >
                <button className = 'close-btn'
                onClick = {() => setTrigger(false)}> Close </button>
                <Button type = 'submit'
                        text= 'Apply'
                        shape = 'square'
                        size = 'xsmall'
                        color = 'primary' />
            </div>
        </div>
    </div>
  ): "";
}

