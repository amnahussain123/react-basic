import React from "react";
import {Link} from "react-router-dom";
import Card from "./ContactCard";

function view(props){
    const renderList = props.viewList.map((contact)=>{
    return (<div>
        <Card contact = {contact}/>
    </div>);
    });
    return(<div>
        <Link to ="/add">
        <button>Add Contact</button>
        </Link>
        {renderList}
        </div>);
}
export default view;