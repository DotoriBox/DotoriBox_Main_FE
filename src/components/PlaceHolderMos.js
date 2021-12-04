import React from "react";
import styled from "styled-components";
import mostans from "../img/mostans.jpeg";

const Container = styled.div`
    width: 100%;
    height: 8.063rem;
    display: flex;
    align-items: center; 
    background-color: ${props => props.index%2===0 ?   'rgba(238, 238, 238, 0.42)' : '#fff' };
    width: calc(100% + 50px);
    margin: 12px -25px 9px -25px;
`;

const Picture = styled.div`
    display: inline-block;
    border-radius: 5px;
    width: 6.625rem;
    height: 6.625rem;
    margin-left: 25px;
    background-image : url(${props => props.url});
    background-size : cover;
    background-repeat : no-repeat;
    background-position : center;
`;


const TextContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    /* top: 10px; */
    left: 10px;
`;

const Text_1 = styled.div`
    font-weight: bolder;
    height: 0.625rem;
    border-radius: 2px;
    margin : 2% auto 5% 4%;
    font-size: 0.688rem;
    line-height: 0.875rem;
    letter-spacing: -0.11px;
`;

const Text_2 = styled.div`
    font-size: 0.688rem;
    line-height: 0.875rem;
    letter-spacing: -0.11px;
    height: 0.625rem;
    border-radius: 2px;
    margin : 2% auto 5% 4%;
`;


const Text_3 = styled.div`
    font-weight: bolder;
    font-size: 0.9rem;
    width: 10.938rem;
    height: 0.813rem;
    border-radius: 2px;
    margin : auto auto 5% 4%;
`;

const Texts = styled.div`
    margin : 2.5px 0 5px 0;
`;

function PlaceHolderMos({ 
    index,
    sampleImage,
    data,
    title,
    name,
    onClick
 }){
   return(
<Container index={index} onClick={onClick} >
    <Picture url={sampleImage}/>
    <TextContainer>
        <Texts>
            <Text_1>{data}</Text_1>
            <Text_2>{title}</Text_2>
        </Texts>
        <Texts>
            <Text_3>{name}<br/>지금 체험하기 </Text_3>
        </Texts>
    </TextContainer>
</Container>
   )        
}

export default PlaceHolderMos;