import React from 'react';
import { Element } from 'react-scroll';

const TopNews = (props) => {

return (
    <>
      <Element name="News">
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
                    <img src={filteredArticle.acf.image}
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
                    <img src={filteredArticle.acf.image}
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
      </Element>
              
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
                  min-height: 150px;
                  max-height: 150px;
                  object-fit: cover;
                  border-radius: 5px;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(4, 1fr);
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
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  font-size: 2vw;
                  padding: 1px 5px 1px 5px;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
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
                  padding: 3px;
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