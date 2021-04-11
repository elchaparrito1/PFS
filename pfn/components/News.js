import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import viewportContext from './viewportContext';

const TopNews = (props) => {
  const { width } = useContext(viewportContext);

return (
    <>
      <Element name="Latest News">
        <div className="content-div" style={width < 1200 ? {zIndex: "0"} : {zIndex: "50"}}>
          {/* <div className="title">Latest News-</div> */}
          <div className="gallery__item--feed">
            <figure className="gallery__item--feed">
              {/* {props.data.sort((a,b) => new Date(b.modified_gmt) - new Date(a.modified_gmt)).map((filteredArticle, index) => (
                <div className="grid-item" key={filteredArticle.id}>
                  <a 
                    target="_blank"
                    rel="noopener noreferrer" 
                    alt={`Link to homepage`} 
                    href={filteredArticle.acf.newslink} >
                          <p className="feed-headline">{filteredArticle.acf.headline}</p>
                  </a>
                    <p className="feed-info">{filteredArticle.acf.date} | {filteredArticle.acf.site}</p>
                </div>
              ))} */}
              <h1>Website is currently down for maintenance</h1>
            </figure>
          </div>
        </div>
      </Element>
              
      <style jsx>{`
              .content-div {
                position: relative;
                align-self: start;
                padding: 30px 30px 30px 30px;
                background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
                background-blend-mode: soft-light, normal;
                box-shadow: -10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD;
                border-radius: 40px;
              }

              .title {
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 39px;
                color: #363839;
                padding: 40px 40px 0 40px;
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

                object-fit: cover;
                object-position: 50% 20%;
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

              .gallery__item--feed {
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
                  position: relative;
                  align-self: start;
                  padding: 10px 0px 10px 0px;
                }

                .title {
                  font-size: 20px;
                  padding: 30px;
                }

                .headline {
                  position: absolute;
                  height: 52px;
                  left: 45px;
                  right: 50px;
                  top: 120px;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 12px;
                  line-height: 160%;
                  display: flex;
                  align-items: flex-end;
                  letter-spacing: 0.0em;
                  color: #FFFFFF;
                }

                .gallery__img {
                  position: static;
                  width: 100%;
                  height: 200px;
                  border-radius: 31.8px;
                }

                .shade {
                  width: 100%;
                  height: 200px;
                  border-radius: 31.8px;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }

              //iphone 6s/Pixel
              @media only screen and (min-width: 321px) and (max-width: 767px) {
                .content-div {
                  padding: 30px 0px 30px 0px;
                }

                .title {
                  font-size: 20px;
                  padding: 30px;
                }

                .headline {
                  left: 40px;
                  right: 40px;
                  top: 224px;
                  font-size: 16px;
                }
  
              }

              //iphone 5S landscape
              @media only screen and (min-width: 321px) and (max-width: 767px) and (orientation: landscape) {
                .content-div {
                  padding: 30px 30px 30px 30px;
                }

                .title {
                  font-size: 20px;
                  padding: 30px;
                }
              }

              @media only screen and (min-width: 768px) and (max-width: 1024px) {

                .link-grid-container {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);;
                  grid-gap: 15px;
                  justify-items: center;
                  align-items: center;
                }

                .title {
                  font-size: 20px;
                  padding: 30px;
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
      `}</style> 
    </>
  );
}

export default TopNews;