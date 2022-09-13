import React from 'react'

export default function TabContent(props){
    const {id, activeTab, children} = props;

  return (
    activeTab === id ? <div className = 'tabContent'>
        {children}
    </div>
    : null
  )
}
