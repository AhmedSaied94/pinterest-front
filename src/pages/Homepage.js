import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import temp from '../images/1.jpg'
import temp1 from '../images/2.jpg'
import SinglePin from '../components/pins/SinglePin'
import Masonry from 'react-masonry-component';
import AddButton from "../components/navigationbar/AddButton"

function Homepage() {
  const [itemData, setItemData] = useState([])
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/pin/pins/`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        //setItemData(itemData => [...itemData, { img: temp }])
        console.log(data)
        for ( let i=0; i < data.length; i++){
          setItemData(itemData=>
            [...itemData, {img: data[i].content_src, external_link: data[i].external_website, id: data[i].id}]
          )
        }
        
      })
  }, [])

  return (
    <Fragment >
      <AddButton />
      <Masonry  style={{ width: "100%",paddingLeft: "80px" }}  >
        {itemData.map((item, index) => (
          <SinglePin key={item.id} img={item.img} external_link={item.external_link} id={item.id} />
        ))}
      </Masonry>
    </Fragment>
  );
}

export default Homepage;