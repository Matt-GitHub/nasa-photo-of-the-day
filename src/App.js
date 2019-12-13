import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
// import Image from "./components/images";
// import ImageTitle from "./components/title";
// import ImageDescription from "./components/description";
// import Date from "./components/date";
// import Copyright from "./components/copyright";
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
    // <div className="App">
    //   <header>
    //     <h1>Astronomy Picture of The Day</h1>
    //   </header>
    //   <section>
    //     <div className="imageBox">
    //       <ImageTitle title={imageTitle} />
    //       <Image url={image} />
    //       <Copyright cr={copyright} />
    //       <Date date={date} />
    //     </div>
    //     <ImageDescription description={description} />
    //   </section>
    // </div>
  );
}

export default App;
