import React from 'react'

import SearchLine from "remixicon-react/SearchLineIcon";

import "./Searchbar.css"

export default function Searchbar(){
  return (
    <form className = "searchbar-control" action = "/" method = "get">
        <i className = 'searchbar-icon'><SearchLine size = {17}/></i>
        <input
            className = 'searchbar'
            type = "text"
            id = "searchbar"
            placeholder = "Search"
            name = "searchbar"
        />
    </form>
  )
}

