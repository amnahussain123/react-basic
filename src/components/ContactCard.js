import React from "react";

const CardContact = (props)=>{
    const {password, email} = props.contact;
        return(<div className="list"><p>{password}, {email}</p></div>);
    }
export default CardContact;