import React from 'react';

const TopNews = (props) => {

return (
    <>
      <div className="content-div">
        <div className="title">News</div>
        <div className="gallery">
          {props.data.filter(obj => obj.acf.placement == "Main").map(filteredArticle => (
            <figure className="gallery__item gallery__item--1" key={filteredArticle.id}>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src="data:image/jpeg;base64,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"
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          {props.data.filter(obj => obj.acf.placement == "Second").map(filteredArticle => (
          <figure className="gallery__item gallery__item--2" key={filteredArticle.id}>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src="data:image/jpeg;base64,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"
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          {props.data.filter(obj => obj.acf.placement == "Third").map(filteredArticle => (
          <figure className="gallery__item gallery__item--3" key={filteredArticle.id}>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src={filteredArticle.acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          {props.data.filter(obj => obj.acf.placement == "Fourth").map(filteredArticle => (
          <figure className="gallery__item gallery__item--4" key={filteredArticle.id}>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src={filteredArticle.acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          {props.data.filter(obj => obj.acf.placement == "Fifth").map(filteredArticle => (
          <figure className="gallery__item gallery__item--5" key={filteredArticle.id}>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src={filteredArticle.acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          {props.data.filter(obj => obj.acf.placement == "Sixth").map(filteredArticle => (
          <figure className="gallery__item gallery__item--6" key={filteredArticle.id}>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src={filteredArticle.acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          {props.data.filter(obj => obj.acf.placement == "Seventh").map(filteredArticle => (
          <figure className="gallery__item gallery__item--7" key={filteredArticle.id}>
           <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={filteredArticle.acf.link} >
                  <img src={filteredArticle.acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{filteredArticle.acf.headline}</p>
            </a>
          </figure>
          ))}
          <figure className="gallery__item gallery__item--feed">
              <div className="feed">Feed</div>
            <div className="link-grid-container">
            {props.data.filter(obj => obj.acf.placement == "Feed").map(filteredArticle => (
              <div className="grid-item" key={filteredArticle.id}>
                <a 
                  target="_blank"
                  rel="noopener noreferrer" 
                  alt={`Link to homepage`} 
                  href={filteredArticle.acf.link} >
                    <div className="link-neumorphic">
                      <button className="variation2" tabIndex="-1">
                        <span>{filteredArticle.acf.headline}</span>
                      </button>
                    </div>
                </a>
              </div>
            ))}
            </div>
          </figure>
        </div>
      </div>
              
      <style jsx>{`

              span {
                display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                overflow: hidden;
               
              }

              .content-div {
                align-self: start;
                padding: 30px 30px 30px 30px;
                border-radius: 6px;
                background: #ecf0f3;
                box-shadow: 13px 13px 20px #cbced1,
                            -13px -13px 20px #ffffff;
              }

              .title {
                position: relative;
                text-align: center;
                font-size: 20px;
                letter-spacing: 0.5px;
                color: gray;
                padding-bottom: 15px;
              }
            
              .gallery {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(7, 1fr);
                grid-gap: 3px;
              }
              
              .gallery__img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
                box-shadow: 13px 13px 20px #cbced1,
                            -13px -13px 20px #ffffff;
              }

              .gallery__item--1 {
                grid-column-start: 1;
                grid-column-end: 3;
                grid-row-start: 1;
                grid-row-end: 4;
                position: relative;
              }

              .gallery__item--2 {
                grid-column-start: 3;
                grid-column-end: 4;
                grid-row-start: 1;
                grid-row-end: 3;
                position: relative;
              }

              .gallery__item--3 {
                grid-column-start: 3;
                grid-column-end: 4;
                grid-row-start: 3;
                grid-row-end: 5;
                position: relative;
              }

              .gallery__item--4 {
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 4;
                grid-row-end: 6;
                position: relative;
              }

              .gallery__item--5 {
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: 4;
                grid-row-end: 6;
                position: relative;
              }

              .gallery__item--6 {
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 6;
                grid-row-end: 8;
                position: relative;
              }

              .gallery__item--7 {
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: 6;
                grid-row-end: 8;
                position: relative;
              }

              .gallery__item--feed {
                grid-column-start: 3;
                grid-column-end: 4;
                grid-row-start: 5;
                grid-row-end: 8;
                max-height: 500px;
              
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: inset 5px 5px 5px #cbced1,
                          inset -5px -5px 5px #ffffff;
                transition: all 2s ease-in-out;
                overflow: auto;
                padding: 15px;
              }

              .link-grid-container {
                display: grid;
                grid-template-columns: auto;
                grid-gap: 15px;
                justify-items: center;
                align-items: center;
              }

              .feed {
                position: relative;
                text-align: center;
                font-size: 20px;
                letter-spacing: 0.5px;
                padding: 15px;
                color: gray;
              }

              .grid-item {
                text-align: center;
              }  

              .link-neumorphic {
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: 6px 6px 16px #cbced1,
                          -6px -6px 26px #ffffff;
                width: 250px;
                height: 50px;
                overflow: hidden;
                position: relative;
                cursor: pointer;

                transition: all 0.3s ease-in-out 0s;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
              }

              .link-neumorphic:hover {
                transform: scale(1.07);
                -moz-transform: scale(1.07);
                -webkit-transform: scale(1.07);
                -o-transform: scale(1.07);
              }

              .variation2 {
                font-family: 'Do Hyeon', sans-serif;
                color: gray;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                background-color: transparent;
                font-size: 0.8rem;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                
              }

              .container {
                position: relative;
              }

              figure img {
                vertical-align: middle;
                transition: all 0.3s ease-in-out 0s;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
              }

              figure:hover img {
                transform: scale(1.04);
                -moz-transform: scale(1.04);
                -webkit-transform: scale(1.04);
                -o-transform: scale(1.04);
              }

              .headline {
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.5);
                padding: 5px;
                width: 99%;
                font-size: 1vw;
                text-overflow: hidden;
                color: white;
              }

              @media only screen and (max-width: 320px) {
                .content-div {
                  padding: 30px 30px 30px 30px;
                  align-items: center
                  // background: green;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(18, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 4;
                  position: relative;
                }
  
                .gallery__item--2 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 4;
                  grid-row-end: 6;
                  position: relative;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 6;
                  grid-row-end: 8;
                  position: relative;
                }
  
                .gallery__item--4 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 8;
                  grid-row-end: 10;
                  position: relative;
                }
  
                .gallery__item--5 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 10;
                  grid-row-end: 12;
                  position: relative;
                }
  
                .gallery__item--6 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 12;
                  grid-row-end: 14;
                  position: relative;
                }
  
                .gallery__item--7 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 14;
                  grid-row-end: 16;
                  position: relative;
                  margin-bottom: 35px;
                }

                .headline {
                  font-size: 3.8vw;
                  padding: 1px 5px 1px 5px;
                }

                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 16;
                  grid-row-end: 19;
                  margin: 0 auto;
                  align-items: center;
                  max-height: 300px;
                  min-width: 200px;
                  max-width: 200px;
                }

                .link-grid-container {
                  grid-template-columns: 1fr;
                }

                .feed {
                  font-size: 15px;
                }

                .link-neumorphic {
                  width: 150px;
                  height: 50px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .variation2 {
                  font-size: 0.75rem;
                  display: inline-block;
                  vertical-align: middle;
                  top: 0;
                  transform: none;
                }
              }

              @media only screen and (min-width: 321px) and (max-width: 767px) {
                .content-div {
                  padding: 30px 30px 30px 30px;
                  align-items: center;
                  // background: pink;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(18, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 4;
                  position: relative;
                }
  
                .gallery__item--2 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 4;
                  grid-row-end: 6;
                  position: relative;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 6;
                  grid-row-end: 8;
                  position: relative;
                }
  
                .gallery__item--4 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 8;
                  grid-row-end: 10;
                  position: relative;
                }
  
                .gallery__item--5 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 10;
                  grid-row-end: 12;
                  position: relative;
                }
  
                .gallery__item--6 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 12;
                  grid-row-end: 14;
                  position: relative;
                }
  
                .gallery__item--7 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 14;
                  grid-row-end: 16;
                  position: relative;
                  margin-bottom: 35px;
                }

                .headline {
                  font-size: 2.9vw;
                  padding: 1px 5px 1px 5px;
                }

                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 16;
                  grid-row-end: 19;
                  margin: 0 auto;
                  align-items: center;
                  max-height: 300px;
                  min-width: 250px;
                  max-width: 250px;
                }

                .link-grid-container {
                  grid-template-columns: 1fr;
                }

                .feed {
                  font-size: 15px;
                }

                .link-neumorphic {
                  width: 150px;
                  height: 50px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .variation2 {
                  font-size: 0.75rem;
                  display: inline-block;
                  vertical-align: middle;
                  top: 0;
                  transform: none;
                }
              }

              @media only screen and (min-width: 321px) and (max-width: 767px) and (orientation: landscape) {
                .content-div {
                  padding: 30px 30px 30px 30px;
                  align-items: center;
                  // background: orange;
                }

                .gallery__img {
                  width: 100%;
                  height: 250px;
                  object-fit: cover;
                  border-radius: 5px;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(5, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                  max-height: 250px;
                }
  
                .gallery__item--2 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                  max-height: 250px;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 250px;
                }
  
                .gallery__item--4 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 250px;
                }
  
                .gallery__item--5 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 3;
                  grid-row-end: 4;
                  position: relative;
                  max-height: 250px;
                }
  
                .gallery__item--6 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 3;
                  grid-row-end: 4;
                  position: relative;
                  max-height: 250px;
                }
  
                .gallery__item--7 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 4;
                  grid-row-end: 5;
                  position: relative;
                  margin-bottom: 35px;
                  max-height: 250px;
                }

                .headline {
                  position: absolute;
                  top: 60%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-size: 2.5vw;
                  padding: 1px 5px 1px 5px;
                }

                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 5;
                  grid-row-end: 6;
                  margin: 0 auto;
                  align-items: center;
                  max-height: 300px;
                  min-width: 450px;
                  max-width: 450px;
                }

                .link-grid-container {
                  grid-template-columns: repeat(2, 1fr);
                }

                .feed {
                  font-size: 15px;
                }

                .link-neumorphic {
                  width: 150px;
                  height: 50px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .variation2 {
                  font-size: 0.75rem;
                  display: inline-block;
                  vertical-align: middle;
                  top: 0;
                  transform: none;
                }
              }

              @media only screen and (min-width: 768px) and (max-width: 1024px) {
                // .content-div {
                //   background: purple;
                // }

                .title {
                  font-size: 30px;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(8, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                }
  
                .gallery__item--2 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 3;
                  grid-row-end: 4;
                  position: relative;
                }
  
                .gallery__item--4 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 4;
                  grid-row-end: 5;
                  position: relative;
                }
  
                .gallery__item--5 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 5;
                  grid-row-end: 6;
                  position: relative;
                }
  
                .gallery__item--6 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 6;
                  grid-row-end: 7;
                  position: relative;
                }
  
                .gallery__item--7 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 7;
                  grid-row-end: 8;
                  position: relative;
                  margin-bottom: 35px;
                }
  
                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 8;
                  grid-row-end: 9;
                  min-height: 400px;
                  max-height: 600px;
                  min-width: 600px;
                  max-width: 700px;
                  margin: 0 auto;
                  border-radius: 5px;
                  background: #ecf0f3;
                  box-shadow: inset 5px 5px 5px #cbced1,
                            inset -5px -5px 5px #ffffff;
                  transition: all 2s ease-in-out;
                  overflow: scroll;
                  padding: 15px;
                }

                .link-grid-container {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);;
                  grid-gap: 15px;
                  justify-items: center;
                  align-items: center;
                }

                .headline {
                  font-size: 3vw;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .feed {
                  font-size: 30px;
                  padding-bottom: 35px;
                }

                .link-neumorphic {
                  width: 250px;
                  height: 70px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .variation2 {
                  font-size: 1rem;
                  display: inline-block;
                  vertical-align: middle;
                  top: 0;
                  transform: none;
                }

              }

              @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
                // .content-div {
                //   background: yellow;
                // }

                .title {
                  font-size: 25px;
                }

                .gallery__img {
                  width: 100%;
                  height: 300px;
                  object-fit: cover;
                  border-radius: 5px;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(5, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                  max-height: 300px;
                }
  
                .gallery__item--2 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                  max-height: 300px;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 300px;
                }
  
                .gallery__item--4 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 300px;
                }
  
                .gallery__item--5 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 3;
                  grid-row-end: 4;
                  position: relative;
                  max-height: 300px;
                }
  
                .gallery__item--6 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 3;
                  grid-row-end: 4;
                  position: relative;
                  max-height: 300px;
                }
  
                .gallery__item--7 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 4;
                  grid-row-end: 5;
                  position: relative;
                  margin-bottom: 35px;
                  max-height: 300px;
                }
  
                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 5;
                  grid-row-end: 6;
                  max-height: 400px;
                  min-width: 600px;
                  margin: 0 auto;
                  border-radius: 5px;
                  background: #ecf0f3;
                  box-shadow: inset 5px 5px 5px #cbced1,
                            inset -5px -5px 5px #ffffff;
                  transition: all 2s ease-in-out;
                  overflow: scroll;
                  padding: 15px;
                }

                .link-grid-container {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);;
                  grid-gap: 15px;
                  justify-items: center;
                  align-items: center;
                }

                .headline {
                  position: absolute;
                  top: 60%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-size: 2vw;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .feed {
                  font-size: 25px;
                  padding-bottom: 35px;
                }

                .link-neumorphic {
                  width: 250px;
                  height: 70px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .variation2 {
                  font-size: 1rem;
                  display: inline-block;
                  vertical-align: middle;
                  top: 0;
                  transform: none;
                }

              }

            
              @media only screen and (min-width: 1500px) {
                
              }
      `}</style> 
    </>
  );
}

export default TopNews;