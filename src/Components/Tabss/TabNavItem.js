import React from "react";

const TabNavItem = (props) => {
    const {id, title, activeTab, setActiveTab, shape, futureStyle} = props;
    console.log(futureStyle)

    const handleClick = () => {
        setActiveTab(id);
    }

    const currentStyle ={
        height:"40px", 
        padding: '10px'
    };

    // SQUARE TAB ITEM
    const squareTabItem = () => {
        return(
            <li style ={{...currentStyle,...futureStyle}}
                onClick = {handleClick}
                className = {activeTab === id ? "active":""}>
                {title}
            </li>
        )
    }


    // UNDERLINE TAB ITEM
    const underlineTabItem = () => {
        return(
            <div>
                <li style ={{...currentStyle,...futureStyle}}
                    onClick = {handleClick}
                    className = {activeTab === id ? "underline active":"underline"}>
                    {title}
                </li>
                <div 
                    onClick = {handleClick}
                    className = {activeTab === id ? "underline-bar active":""}>
                </div>
            </div>
        )
    }

    if (shape === 'square'){
        return(squareTabItem())
    };

    if (shape === 'underline'){
        return(underlineTabItem())
    }
    
};

export default TabNavItem;