import React, { useContext } from 'react';
import { Element } from 'react-scroll';
import viewportContext from './viewportContext';

const SectionalNews = (props) => {
  const { width } = useContext(viewportContext);
  return (
    <>
      <Element name={props.title}>
        <div className="content-div" style={width < 1200 ? {zIndex: "0"} : {zIndex: "50"}}>
          <div className="title">{props.title}-</div>
          <div className="gallery">
            <figure className="gallery__item--feed">
              {props.data.sort((a,b) => new Date(b.modified_gmt) - new Date(a.modified_gmt)).map((post) => (
                <div className="grid-item" key={post.id}>
                  <a 
                    target="_blank"
                    rel="noopener noreferrer" 
                    alt={`Link to homepage`} 
                    href={post.acf.newslink} >
                          <p className="feed-headline">{post.acf.headline}</p>
                  </a>
                    <p className="feed-info">{post.acf.date} | {post.acf.site}</p>
                </div>
              ))}
              
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

              .atag:hover p {
                color: #E32222;
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

export default SectionalNews;