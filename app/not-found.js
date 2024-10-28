import React from "react";

export default function NotFound(){
    return(
        <div style={{ display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',  height: 'calc(100% - 70px)'}}> 
            <h1 style={{ fontWeight: '300'}}>Page was not found!</h1>

        </div>
    )
}