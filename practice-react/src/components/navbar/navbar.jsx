import React from 'react'
import {
  Link
} from "react-router-dom";


export default function Navbar(props){
    return(
    <nav className={`container-fluid navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-${props.mode}` }>
        <div className="container-fluid">
          <h5 className="navbar-brand">Navbar</h5>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" onClick={props.togoleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{backgroundColor : props.mode ==='primary'?'dark':'primary'}} >Eneble {props.mode ==='light'?'dark':'light'} mode</label>
        </div>
      
    </nav>
    )

}