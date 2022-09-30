import React from "react";
import '../Components/Home.css';
import inshort from '../image/inshorts.jpg';
import ios from '../image/ios_app_store.png';
import playstore from '../image/android_app_store.png'

function body() {
  return (
    <div className="container">
      <div className="leftContainer col-md-6">
        <img className='image1'
        src={inshort}
        width="400"
        alt="loading"
        />
      </div>
      <div className="rightContainer col-md-6">
        <h1>Stay informed in 60 words.</h1>
        <p>We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.</p>
         <div className="image2"><img src={ios} alt="Loading"/>
         <img src={playstore} alt="loading" />
         </div>
         </div>
    </div>
  );
}

export default body;
