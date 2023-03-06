import React from 'react';
import {Link} from "react-router-dom"
const Error =()=>{
return(
    <div>
        <h1>OPPS! DONT HAVE THIS PAGE!!!!</h1>
    <Link to="/">
    <p>Go to home page</p>
    </Link>
        </div>
    )
}
export default Error;