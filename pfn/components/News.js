import React from 'react';
import { Element } from 'react-scroll';

const TopNews = (props) => {

return (
    <>
      <Element name="News">
        <div className="content-div">
          <div className="title">Feed-</div>
          <div className="gallery">
            {props.data.filter(obj => obj.acf.placement == "Main").map(filteredArticle => (
              <figure className="gallery__item--1" key={filteredArticle.id}>
              <a 
                target="_blank"
                rel="noopener noreferrer" 
                alt={`Link to homepage`} 
                href={filteredArticle.acf.link} 
                className="atag">
                    <img src={filteredArticle.acf.image}
                      alt="News feed image" 
                      className="gallery__img"
                    />
                    <div className='shade' style={{ background: `linear-gradient(0deg, rgba(54, 56, 57, 0.65), rgba(54, 56, 57, 0.65))`}}></div>
                    <p className="headline">{filteredArticle.acf.headline}</p>
              </a>
            </figure>
            ))}
            <figure className="gallery__item--feed">
              {props.data.filter(obj => obj.acf.placement == "Feed").map((filteredArticle, index) => (
                <div className="grid-item" key={filteredArticle.id}>
                  <a 
                    target="_blank"
                    rel="noopener noreferrer" 
                    alt={`Link to homepage`} 
                    href={filteredArticle.acf.link} >
                          <p className="feed-headline">{filteredArticle.acf.headline}</p>
                  </a>
                    <p className="feed-info">Date | website</p>
                </div>
              ))}
              
            </figure>
          </div>
        </div>
      </Element>
              
      <style jsx>{`
              .content-div {
                position: relative;
                z-index: 50;
                align-self: start;
                padding: 30px 30px 30px 30px;
                background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
                background-blend-mode: soft-light, normal;
                box-shadow: -10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD;
                border-radius: 40px;
              }

              .title {
                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 39px;
                color: #363839;
                padding: 40px;
              }
            
              .gallery {
                display: flex;
                justify-content: center;
                flex-direction: column;
              }
              
              .gallery__img {
                position: static;
                width: 100%;
                height: 318px;
                border-radius: 31.8px;
              }

              .atag:hover p {
                color: #E32222;
              }

              .shade {
                width: 100%;
                height: 318px;
                border-radius: 31.8px;
                position: absolute;
                top: 0;
                left: 0;
              }

              .gallery__item--1 {
                position: relative;
              }

              .gallery__item--feed {
                max-height: 400px;
                overflow: auto;
                padding: 15px;
                display: flex;
                flex-direction: column;
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
                margin: 10px 0px;
              }

              .container {
                position: relative;
              }

              .headline {
                position: absolute;
                height: 52px;
                left: 32px;
                right: 125px;
                top: 224px;
                font-style: normal;
                font-weight: 800;
                font-size: 16px;
                line-height: 160%;
                display: flex;
                align-items: flex-end;
                letter-spacing: 0.05em;
                color: #FFFFFF;
              }

              .headline:hover {
                color: #E32222;
              }

              .feed-headline {
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;    
                text-decoration-line: underline;
                color: #000000;
                flex: none;
                order: 0;
                align-self: left;
                margin: 10px 0px;
              }

              .feed-headline:hover {
                  color: #E32222;
              }

              .feed-info {
                font-style: normal;
                font-weight: bold;
                font-size: 8px;
                line-height: 10px;
                letter-spacing: 0.05em;
                color: #9D9FA2;
              }

              @media only screen and (max-width: 320px) {
                .content-div {
                  padding: 30px 30px 30px 30px;
                  align-items: center
                }

                .gallery__img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 5px;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                  min-height: 200px;
                  max-height: 200px;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr;
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 200px;
                }
  
                .gallery__item--2 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 3;
                  grid-row-end: 5;
                  position: relative;
                  max-height: 200px;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 5;
                  grid-row-end: 7;
                  position: relative;
                  max-height: 200px;
                }
  
                .gallery__item--4 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 7;
                  grid-row-end: 9;
                  position: relative;
                  max-height: 200px;
                }

                .headline {
                  font-size: 3.8vw;
                  padding: 1px 5px 1px 5px;
                }

                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 9;
                  grid-row-end: 11;
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

                .neumorphic {
                  width: 150px;
                  height: 50px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
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
                  padding: 30px 0px 30px 0px;
                  align-items: center;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(10, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 3;
                  position: relative;
                }
  
                .gallery__item--2 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 3;
                  grid-row-end: 5;
                  position: relative;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 5;
                  grid-row-end: 7;
                  position: relative;
                }
  
                .gallery__item--4 {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 7;
                  grid-row-end: 9;
                  position: relative;
                }

                .headline {
                  font-size: 2.9vw;
                  padding: 1px 5px 1px 5px;
                }

                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 9;
                  grid-row-end: 11;
                  margin: 0 auto;
                  text-align: center;
                  align-items: center;
                  max-height: 300px;
                  max-width: 350px;
                }

                .link-grid-container {
                  grid-template-columns: repeat(2, 1fr);
                }

                .feed {
                  font-size: 15px;
                }

                .neumorphic {
                  width: 120px;
                  height: 50px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
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
                }

                .gallery__img {
                  width: 100%;
                  min-height: 200px;
                  max-height: 200px;
                  object-fit: cover;
                  border-radius: 5px;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(3, 1fr);
                  grid-gap: 3px;
                }

                .gallery__item--1 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                  max-height: 200px;
                }
  
                .gallery__item--2 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 1;
                  grid-row-end: 2;
                  position: relative;
                  max-height: 200px;
                }
  
                .gallery__item--3 {
                  grid-column-start: 1;
                  grid-column-end: 3;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 200px;
                }
  
                .gallery__item--4 {
                  grid-column-start: 3;
                  grid-column-end: 5;
                  grid-row-start: 2;
                  grid-row-end: 3;
                  position: relative;
                  max-height: 200px;
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
                  grid-row-start: 3;
                  grid-row-end: 4;
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

                .neumorphic {
                  width: 150px;
                  height: 50px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
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
                .title {
                  font-size: 30px;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(5, 1fr);
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
  
                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 5;
                  grid-row-end: 6;
                  min-height: 450px;
                  max-height: 450px;
                  margin: 0 auto;
                  border-radius: 5px;
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

                .neumorphic {
                  width: 250px;
                  height: 70px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
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
                  max-height: 300px;
                  object-fit: cover;
                  border-radius: 5px;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                }

                .gallery {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(3, 1fr);
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
  
                .gallery__item--feed {
                  grid-column-start: 1;
                  grid-column-end: 5;
                  grid-row-start: 3;
                  grid-row-end: 4;
                  max-height: 400px;
                  min-width: 600px;
                  margin: 0 auto;
                  border-radius: 5px;
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

                .neumorphic {
                  width: 250px;
                  height: 70px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
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