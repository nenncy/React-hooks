import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container ,Row,Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { getSuggestedQuery } from '@testing-library/dom';

const mystyle = {
   color: "white",
   backgroundColor: "	#F08080",
   padding: "10px",
   fontFamily: "Arial",
   textAlign:"center",
   fontSize:"2em"
 };
 

const Useeffect = () => {

   const [user, setUsers] = useState([])
   const getUser = async ()=>{
       const response= await fetch('https://jsonplaceholder.typicode.com/posts');
      
      setUsers( await response.json());
      
   }
   useEffect(() => {
      getUser();
  }, []);
   
   return (
      <>
   <h1 style={mystyle}>List of Posts</h1>
   <div className="container-fluid " >
  <div className="row text-center">
   <div className="cards-container">
     {
         user.map((CurElem) => {
           return(
             <div>
              <div className="col-10 col-md-4 mt-5" key={CurElem.id}>
             <Card style={{ width: '18rem', backgroundColor:"skyblue"}} className="d-flex align-items-center">
             <Card.Body>
             <Card.Text style={{textAlign:"center",fontFamily:"sans-serif"}}>POST {CurElem.id}</Card.Text>
           <Card.Title>{CurElem.title}</Card.Title>
           <Card.Text>
            {CurElem.body}

           </Card.Text>
          
           </Card.Body>
          </Card>
           </div>
         <br/>
         </div>
       
      
           )
         })

     }   
       </div>
      </div>
      </div>   
      </>
   )
}

export default Useeffect;

