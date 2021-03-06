import React, { useState, useEffect } from "react";
import { Link, useHistory,useLocation } from "react-router-dom";
import Progressbar from "../components/Progressbar";
import "../components/SelectInfoPage.css";
import Dropdown from "../components/Dropdown.js";
import style from "../components/PageResource";
import styled from "styled-components";

const { Button, Footer, Header, Text } = style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Info2 = styled.div`
  text-align: left;
  padding: 1.8% 0 0 0;
`;

const Info3 = styled.div`
  text-align: left;
  padding: calc(35px + 8%) 0 1.8% 0;
`;

const TextGender = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  letter-spacing: -0.13px;
`;

const GenderButton = styled.button`
  width: 48vw;
  margin-left: ${props => props.isLeft? 0 : '10px'};
  margin-right: ${props => props.isLeft? '10px' : 0};
  height: 50px;
  border-radius: 5px;
  border: solid 0.5px #eaeaea;
  background-color: ${props => props.selected ? "#c4442a" : '#fff'};
  color: ${props => props.selected ? "#fff" : "#6a707e"};
  font-weight: bold;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled(Button)`
  background-color : ${props => props.BColor};
`;

function SelectInfoPage() {
  const [gender, setGender] = useState(undefined);

  useEffect(() => {}, [gender]);

  const [selected, setSelected] = useState(undefined);
  const history = useHistory();

  const location = useLocation();
  const code = location.state.code;
  const taxiId = location.state.taxiId;

  const onSubmit = () => {
    history.push({pathname : '/recommend' , state : { isMale: gender, code, age: selected, taxiId: taxiId }})
  }
  return (
    <Main>
      <Progressbar state={1} />
      <Header>꼭 맞는 샘플을<br/>추천해 드릴게요</Header>

      <Info2>
        <Text>
          택시 안 다양한 샘플 중<br />
          제일 적합한 제품을 알려드려요
        </Text>
      </Info2>

      <Info3>
        <TextGender>성별</TextGender>
      </Info3>
      <BtnContainer>
        <GenderButton
          onClick={() => setGender(true)}
          selected={gender === true}
          isLeft={true}
        >
          남성
        </GenderButton>
        <GenderButton
          onClick={() => setGender(false)}
          selected={gender === false}
        >
          여성
        </GenderButton>
      </BtnContainer>

      <Info3>
        <TextGender>나이</TextGender>
      </Info3>
      <Dropdown selected={selected} setSelected={setSelected} />
      <Footer>
        <SubmitButton onClick={(selected !== undefined) && (gender !== undefined)? () => onSubmit() : NaN} BColor={ (gender!==undefined) && (selected !== undefined) ? "#c4442a":"#707070"}>확인</SubmitButton>
      </Footer>
    </Main>
  );
}


export default SelectInfoPage;