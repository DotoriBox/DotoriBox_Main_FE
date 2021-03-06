import React, { useEffect, useState } from "react";
import styled from "styled-components";
import style from "../components/PageResource";
import Card from "../components/Card";
import { useHistory, useLocation } from "react-router-dom";
import Progressbar from "../components/Progressbar";
import { SampleAPI } from "../API";

const { Text, InputData, Footer, Button } = style;

const Header = styled.h2`
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.563rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

const Input = styled(InputData)`
  margin-top: 20px;

`;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SampleText = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: -0.12px;
  color: #c4442a;
  margin-top: auto;
`;

const TicketText = styled.div`
  font-family: SpoqaHanSansNeo;
  font-size: 0.938rem;
  font-weight: bold;
  letter-spacing: -0.15px;
`;

const InfoText = styled.div`
  font-family: SpoqaHanSansNeo;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: -0.11px;
  text-align: center;
  color: #bcb9b9;
  margin-top: 1.594rem;
  margin-bottom: 2.313rem;
  text-decoration: underline;
`;

const SubmitButton = styled(Button)`
  margin-top: 2.25rem;
  background-color: #bcb9b9;
`;

function ThanksPage() {
  const history = useHistory();
  const location = useLocation();
  const [sample, setSample] = useState();
  const [phoneNum, setPhoneNum] = useState();
  
  
  const { sampleId, taxiId, customerId } = location.state;
  
  useEffect(() => {
    SampleAPI.getSample(sampleId).then((res) => {
      setSample(res.data);
    });
  }, []);
  
  const onPhoneNumChange = (e) => {

    switch(e.target.value.length) {
      case 3: if (phoneNum.length === 2) e.target.value = e.target.value.concat('-');  break;
      case 4: e.target.value = e.target.value.substring(0,4); break;
      case 8: if (phoneNum.length === 7) e.target.value=e.target.value.concat('-'); break;
      case 9: e.target.value = e.target.value.substring(0,9); break;
      case 14: e.target.value = e.target.value.substring(0,13); break;
      default: break;
    }

    setPhoneNum(e.target.value);
  }


  return (
    <Main>
      <Progressbar state={4} />
      <Header>???????????????</Header>
      <Text>
        ????????? ?????? ??? ????????? ?????? ????????????
        <br />
        ???????????? ???????????????, ????????? ???????????? ?????????
      </Text>
      {
        sample &&
        <Card
            image={sample.image}
            manufacture={sample.sampleInfo.manufacture}
            name={sample.sampleInfo.name}
            target={sample.sampleTargets}
            stock={1}
        />
      }
      <Footer>
        <SampleText>
          ???? ????????? ????????? ?????? 80% ???????????? ???????????? ??????
        </SampleText>
        <TicketText>????????? ??????????????? ??????????????????</TicketText>
        <Input onChange={onPhoneNumChange} placeholder="??????????????? ?????? ??? ?????????." />
        <SubmitButton>????????? ????????? ?????? ??? ?????????</SubmitButton>
        <InfoText  onClick={() => history.push("/information")}>
          ????????? ?????? ??? ???????????? ??????, ????????? ???????????????.
        </InfoText>
      </Footer>
    </Main>
  );
}

export default ThanksPage;