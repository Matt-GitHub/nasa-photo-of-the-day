import React from "react";
import {
  StyledHeader,
  StyledH2,
  StyledImg,
  StyledP,
  StyledDesP
} from "./imageStyle";

const ImageCard = props => {
  return (
    <div>
      <StyledHeader>
        <h1>Astronomy Picture of The Day</h1>
      </StyledHeader>
      <div>
        <StyledH2>{props.title}</StyledH2>
        <StyledImg src={props.url} />
        <StyledP>{props.cr}</StyledP>
        <StyledP>{props.date}</StyledP>
      </div>
      <div>
        <StyledDesP>{props.description}</StyledDesP>
      </div>
    </div>
  );
};

export default ImageCard;
