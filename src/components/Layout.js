import React, { Fragment } from 'react';
import Navbar from './Navbar'

export  const Layout = (props) => {
    
 return (
     <Fragment>
         <Navbar />
         {props.children}
     </Fragment>

 )
}

