import React from "react";
import styled from "styled-components";
import axios from 'axios';

import { useState, useEffect } from "react";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";



export default function Projects() {

  const [userData, setDeta] = useState([]);
  const [limit, setLimit]= useState(6);

  useEffect(() => { 
    // console.log("Hello");
    axios.get('https://api.github.com/users/JatinJD14296/repos')
    .then(function (response) {
      // handle success
      console.log(response.data); 
      setDeta(response.data)
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }, [limit])

  const LoadMore = ()=>{
    setLimit(limit+6)
  }

  return (  
    <Wrapper id="Projects">
      <div className="whiteBg">
        <div className="container"> 
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
              {userData.map((data)=>{
                return(
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <a href={data.html_url} target="_blank">
                    <ProjectBox
                      img={ProjectImg1}
                      title={data.name}
                      text={data.description} 
                    />
                  </a>
              </div>
            
                  )
              })}
          </div>     
      </div>
    </div>    
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

