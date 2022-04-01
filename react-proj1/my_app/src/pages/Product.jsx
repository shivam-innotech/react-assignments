import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Product() {
  const [data, setData] = useState([])
  

  useEffect(() => {
    function getdata(){
      axios.get("https://fakestoreapi.com/products").then((response)=>{
       setData(response.data)
      
      })
    }
    getdata()
 
    
  }, [])
 
  return (
    <>    
      {
          
        data.map((item)=> {
          return (
            <div className="card-container">
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-descripption">
                  <hr />
                  <h3>{item.title}</h3>
                  <h3>{item.price}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
           )
        })
      } 
    </>
  )
}

export default Product