/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DiaryImg } from 'assets/diary.svg';
import { SketchPicker } from 'react-color';
import Navbar from 'components/Navbar';
import FontMenu from 'components/FontMenu';
import { faBook, faFont, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  width: 388px;
  height: 500px;
  .plus_icon {
    .first {
      fill: ${(props) => props.color1 || '#FF8960'};
    }
    .circle {
      fill: ${(props) => props.color2 || 'FF703E'};
    }
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
`;

const LeftDiv = styled.div`
  display: flex;

  flex-direction: column;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25),
    0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.25rem);
  border-radius: 2.188rem;
  gap: 50px;
  width: 40%;

  padding: 30px;
`;

const SelectDiv = styled.div`
  position: absolute;
  top: 200px;
  left: 750px;
`;

const Jujang = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-right: 100px;
`;

const InputBar = styled.input`
  padding: 0.01rem 0.5rem;
  // gap: 0.125rem;

  width: 70%;
  height: 5rem;

  background: #ffffff;
  border: 0.125rem solid #dfba88;
  border-radius: 1rem;
`;
const NamingDiv = styled.span`
  display: flex;

  justify-content: center;
`;

const ColorPalette = styled.div`
  background-color: #ff8960;
  width: 15px;
  height: 15px;
`;

const Colorfont = styled.div`
  background-color: black;
  width: 15px;
  height: 15px;
`;

const FontSizePlus = styled.div`
  margin-left: 150px;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const FontSizeminus = styled.div`
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const EditDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
`;

const Line = styled.hr`
  border-color: red;
  background-color: red;
  width: 650px;
  lineheight: 100px;
`;

const RightDiv = styled.div`
  display: flex;
  // width: 60%;
  justify-content: center;
  align-items: center;
`;
const IndexDiv = styled.p`
  position: absolute;
  top: 200px;
  right: 75px;
  font-family: ${(props) => props.fontName}, 'sans-serif';
`;
const DiaryIcon = <FontAwesomeIcon size="lg" icon={faBook} />;
const ClipIcon = <FontAwesomeIcon size="lg" icon={faPaperclip} />;
const FontIcon = <FontAwesomeIcon size="lg" icon={faFont} />;

function diaryEdit() {
  const [colorHex1, setColorHex1] = useState('');
  const [colorHex2, setColorHex2] = useState('');
  const [colorHex3, setColorHex3] = useState('');
  const [message, setMessage] = useState('제목을 입력해주세요');
  const [diaryColor, setdiaryColor] = useState(false);
  const [buttonColor, setbuttonColor] = useState(false);
  const [fontColor, setfontColor] = useState(false);
  const [fontStyle, setfontStyle] = useState(false);
  const [size, setsize] = useState(20);
  const [fontName, setfontName] = useState('');

  const parentFunction = (data) => {
    setfontName(data);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const togglediary = (event) => {
    setdiaryColor(!diaryColor);
    setbuttonColor(false);
    setfontColor(false);
    setfontStyle(false);
  };

  const togglebutton = (event) => {
    setbuttonColor(!buttonColor);
    setdiaryColor(false);
    setfontColor(false);
    setfontStyle(false);
  };

  const togglefont = (event) => {
    setbuttonColor(false);
    setdiaryColor(false);
    setfontStyle(false);
    setfontColor(!fontColor);
  };

  const togglefontstyle = (event) => {
    setbuttonColor(false);
    setdiaryColor(false);
    setfontColor(false);
    setfontStyle(!fontStyle);
  };

  const togglePlus = (event) => {
    if (size === 24) {
      return;
    }
    setsize(size + 1);
  };

  const toggleminus = (event) => {
    if (size === 17) {
      return;
    }
    setsize(size - 1);
  };

  let selectName;
  if (diaryColor === true) {
    selectName = <p>{DiaryIcon} </p>;
  } else if (buttonColor === true) {
    selectName = <p>{ClipIcon}</p>;
  } else if (fontColor === true) {
    selectName = <p>{FontIcon}</p>;
  }
  return (
    <div className="diaryEdit">
      {/* <RootDiv> */}
      <Navbar />
      <MainDiv>
        <LeftDiv>
          <EditDiv>
            <NamingDiv>다이어리 색상 &nbsp; {DiaryIcon}</NamingDiv>
            <ColorPalette
              onClick={togglediary}
              style={{ background: colorHex1 }}
            ></ColorPalette>
          </EditDiv>
          <EditDiv>
            <NamingDiv>버튼 클립 색상 &nbsp; {ClipIcon}</NamingDiv>
            <ColorPalette
              onClick={togglebutton}
              style={{ background: colorHex2 }}
            ></ColorPalette>
          </EditDiv>

          <EditDiv>
            <NamingDiv>폰트 색상 &nbsp; {FontIcon}</NamingDiv>
            <Colorfont
              onClick={togglefont}
              style={{ background: colorHex3 }}
            ></Colorfont>
          </EditDiv>

          <EditDiv>
            <NamingDiv>폰트 스타일</NamingDiv>
            <Colorfont onClick={togglefontstyle}></Colorfont>
          </EditDiv>

          <EditDiv>
            <NamingDiv>폰트 크기</NamingDiv>
            <FontSizePlus onClick={togglePlus}>+</FontSizePlus>
            <FontSizeminus onClick={toggleminus}>-</FontSizeminus>
          </EditDiv>

          <EditDiv>
            <InputBar
              maxLength={14}
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              value={message}
              placeholder="제목을 입력해주세요"
            />
          </EditDiv>
        </LeftDiv>

        <SelectDiv>
          {selectName}
          {diaryColor ? (
            <SketchPicker
              color={colorHex1}
              onChange={(e) => setColorHex1(e.hex)}
            />
          ) : null}
          {buttonColor ? (
            <SketchPicker
              color={colorHex2}
              onChange={(e) => setColorHex2(e.hex)}
            />
          ) : null}
          {fontColor ? (
            <SketchPicker
              color={colorHex3}
              onChange={(e) => setColorHex3(e.hex)}
            />
          ) : null}
          {fontStyle ? <FontMenu parentFunction={parentFunction} /> : null}
        </SelectDiv>

        <RightDiv>
          <Container color1={colorHex1} color2={colorHex2}>
            <DiaryImg className="plus_icon" />
          </Container>
          <IndexDiv
            style={{ color: colorHex3, fontSize: size, fontFamily: fontName }}
            onChange={(e) => setColorHex2(e.hex)}
          >
            {message}
          </IndexDiv>
        </RightDiv>
      </MainDiv>
      <Jujang>저장하기</Jujang>
      {/* </RootDiv> */}
    </div>
  );
}

export default diaryEdit;