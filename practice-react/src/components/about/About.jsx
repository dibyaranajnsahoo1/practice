
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function About(props) {
   const [them,setThem] = useState({
    color:'black',
    backgroundColor:'white'
   });
   const[themBtn,setThemBtn] = useState('Datk Mode')
  const handelMode = () =>{
    if(them.color === "black"){
        setThem({
            color:'white',
            backgroundColor:'black'
        })
        setThemBtn('Light mode')
    }else{
        setThem({
            color:'black',
            backgroundColor:'white'
        })
        setThemBtn('dark mode')
    }
  }

  return (
    <>
            <div className="container" style={them}>
            <h1 style={them}>About Us</h1>
            <Accordion defaultActiveKey="0" style={them}>
                <Accordion.Item eventKey="0" style={them}>
                <Accordion.Header style={them}>Accordion Item #1</Accordion.Header >
                <Accordion.Body style={them}>
                    This is the first item's accordion body.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={them}>
                <Accordion.Header style={them}>Accordion Item #2</Accordion.Header>
                <Accordion.Body style={them}>
                    This is the second item's accordion body.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={them}>
                <Accordion.Header style={them}>Accordion Item #3</Accordion.Header>
                <Accordion.Body style={them}>
                    This is the third item's accordion body.
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            <div className='container'>
                <button className="btn btn-primary mx-1" onClick={handelMode}>{themBtn}</button>
            </div>
    </>
  );
}
