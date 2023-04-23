import React from 'react'
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import CategoryService from '../../Service/Category.service';
const Container = styled.div`
 display: flex;
 overflow: hidden;
flex-direction: row;
height:220.137px;
position:relative;
margin-top:2px;
background-color: rgb(254 242 242)`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
`;

const Left = styled.div`
  flex: 1;
  padding: 50px;
  text-align:left
`;

const Right = styled.div`
    padding: 50px;
    
  flex: 1;
`;

const Title = styled.h1`
  font-size: 32px;
	color: #111111;
	margin-bottom: 15px;
  font-family: "Guardian-EgypTT",Charter,"Charter Bitstream",Cambria,"Noto Serif Light","Droid Serif",Georgia,serif;
    letter-spacing: .5px;
    line-height: 28px;
    text-align:left;
`;

const Desc = styled.p`
    font-family: -apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
    font-size: 14px;
    line-height: 1.4;
    color: #595959;
`;

const ImageContainer = styled.div`
   display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 60px;

`;


const Image = styled.div`
    width: 18%;
    margin-bottom: 20px;
    text-align: center;
    cursor:pointer;



`;

const Img = styled.img`
   border-radius: 50%;
    width: 86.32px;
    height: 86.32px;

`;


const Text = styled.p`
 margin-top: 10px;
    padding-top:5px;
 font-size: 13px;
 font-weight:600;
  line-height:18px;
  cursor:pointer;
	color: #222;
  font-family: -apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
`;





 function CategoryInfo () {
  const id =useParams().id
  const [category,setCategory]= useState()
  

  
  useEffect(()=>{
    CategoryService.getCategory(id).then((res)=>{
      console.log("dataofcategory",res)
      setCategory(res.data.data)
            
    }).catch((err)=>{
      console.log(err)
    })
   },[id])

  
   
  return (
    <div>
<Container>
 <Wrapper>
 <Left>
  <Title>{category?.name}</Title>
<Desc>{category?.description}</Desc>
</Left>
<Right>
<ImageContainer>
<Image>
<Img  src='img/product/product-1.jpg'       />
{category?.subcategories.map((i) => {
                              return (
                                <Text>{i.name}</Text>
                              )
                            })}
  
  </Image>
  <Image>
<Img  src='img/product/product-1.jpg'       />
  <Text>man</Text>
  
  </Image>
  <Image>
<Img  src='img/product/product-1.jpg'       />
  <Text>man</Text>
  
  </Image>
  <Image>
<Img  src='img/product/product-1.jpg'       />
  <Text>man</Text>
  
  </Image>
</ImageContainer>

  
</Right>

</Wrapper>
 </Container>
    </div>
  )
}

export default CategoryInfo