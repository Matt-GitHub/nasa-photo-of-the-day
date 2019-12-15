import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImageCard from "./components/imageCard";

function App() {
  const [image, setImage] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=D6tKo8m5kkynaYvswFokSgb6Ff3YXgs0xRfzw94s"
      )
      .then(response => {
        setImage(response.data.url);
        setImageTitle(response.data.title);
        setDescription(response.data.explanation);
        setDate(response.data.date);
        setCopyright(response.data.copyright);
      })
      .catch(error => {
        console.log(error);
      }, []);
  });
  return (
    <ImageCard
      title={imageTitle}
      url={image}
      cr={copyright}
      date={date}
      description={description}
    />
  );
}

export default App;
