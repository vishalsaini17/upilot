import React, {useState} from "react";
import "./Tabs.css";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent"
import UserLineIcon from "remixicon-react/UserLineIcon";

export default function Tabs(props){
    const {tabList} = props;
    console.log()
    console.log(tabList)
    const [activeTab, setActiveTab] = useState(tabList[0]['id']);

    const small_square_tab =() =>{
        return(
            <div className="tabs">
                <ul className="square-tab-nav" 
                    style ={{fontSize: '13px',
                            height: '40px'

                    }}>
                    {tabList.map((tab) => {
                        return(
                            <TabNavItem 
                            futureStyle = {{height: '40px'}}
                            title= {tab.name} id ={tab.id}
                            activeTab= {activeTab} setActiveTab= {setActiveTab} />
                        )
                    })}
                </ul>

                <div className="outlet">
                    {tabList.map((tab) => {
                        return(
                            <TabContent id = {tab.id}
                            activeTab = {activeTab}>
                                <p>{tab.content}</p>
                            </TabContent>
                            
                        )
                    })}
                </div>
            </div>
        )
    }

    const medium_square_tab =() =>{
        return(
            <div className="tabs">
                <ul className="square-tab-nav"
                    style = {{fontSize: '15px'}}>
                    {tabList.map((tab) => {
                        return(
                            <TabNavItem 
                            futureStyle = {{height: '50px',
                                            padding: '15px'}}
                            title= {tab.name} id ={tab.id}
                            activeTab= {activeTab} setActiveTab= {setActiveTab} />
                        )
                    })}
                </ul>

                <div className="outlet">
                    {tabList.map((tab) => {
                        return(
                            <TabContent id = {tab.id}
                            activeTab = {activeTab}>
                                <p>{tab.content}</p>
                            </TabContent>
                            
                        )
                    })}
                </div>
            </div>
        )
    }

    const large_square_tab =() =>{
        return(
            <div className="tabs">
                <ul className="square-tab-nav underline"
                    style = {{fontSize: '15px'}}>
                    {tabList.map((tab) => {
                        return(
                            <TabNavItem 
                            futureStyle = {{height: '50px',
                                            padding: '15px'}}
                            title= {tab.name} id ={tab.id}
                            activeTab= {activeTab} setActiveTab= {setActiveTab}
                            shape = {props.shape}/>
                        )
                    })}
                </ul>
                
                <div className="outlet">
                    {tabList.map((tab) => {
                        return(
                            <TabContent id = {tab.id}
                            activeTab = {activeTab}>
                                <p>{tab.content}</p>
                            </TabContent>
                            
                        )
                    })}
                </div>
            </div>
        )
    }

    const medium_underline_tab =() =>{
        return(
            <div className="tabs">
                <ul className="square-tab-nav"
                    style = {{fontSize: '18px'}}>
                    {tabList.map((tab) => {
                        return(
                            <TabNavItem 
                            futureStyle = {{height: '60px',
                                            padding: '18px'}}
                            title= {tab.name} id ={tab.id}
                            activeTab= {activeTab} setActiveTab= {setActiveTab} />
                        )
                    })}
                </ul>
                
                <div className="outlet">
                    {tabList.map((tab) => {
                        return(
                            <TabContent id = {tab.id}
                            activeTab = {activeTab}>
                                <p>{tab.content}</p>
                            </TabContent>
                            
                        )
                    })}
                </div>
            </div>
        )
    }

    if (props.size === 'small' &&
        props.shape === 'square')
    {
        return(<>{small_square_tab()}</>)
    };

    if (props.size === 'medium' &&
        props.shape === 'square')
    {
        return(<>{medium_square_tab()}</>)
    };

    if (props.size === 'large' &&
        props.shape === 'square')
    {
        return(<>{large_square_tab()}</>)
    };


    if (props.size === 'medium' &&
        props.shape === 'underline')
    {
        return(<>{large_square_tab()}</>)
    }
};