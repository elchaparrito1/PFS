import React from 'react';

const TopNews = (props) => {

return (
    <>
      <div className="content-div">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[0].acf.link} >
                  <img src={props.data[0].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[0].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--2">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[1].acf.link} >
                  <img src={props.data[1].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[1].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--3">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[2].acf.link} >
                  <img src={props.data[2].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[2].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--4">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[3].acf.link} >
                  <img src={props.data[3].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[3].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--5">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[4].acf.link} >
                  <img src={props.data[4].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[4].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--6">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[5].acf.link} >
                  <img src={props.data[5].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[5].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--7">
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt={`Link to homepage`} 
              href={props.data[6].acf.link} >
                  <img src={props.data[6].acf.image}
                    alt="News feed image" 
                    className="gallery__img"
                  />
                  <p className="headline">{props.data[6].acf.headline}</p>
            </a>
          </figure>
          <figure className="gallery__item gallery__item--feed">
            <div className="link-grid-container">
              <div className="feed">Feed</div>
                {props.data.slice(7).map((post) => (
                  <div className="grid-item" key={post.id}>
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={post.acf.link} >
                        <div className="link-neumorphic">
                          <button className="variation2" tabIndex="-1">
                            {post.acf.headline}
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

              .content-div {
                align-self: start;
                padding: 30px 30px 30px 30px;
                border-radius: 6px;
                background: #ecf0f3;
                box-shadow: 13px 13px 20px #cbced1,
                            -13px -13px 20px #ffffff;
              }
            
              .gallery {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(8, 1fr);
                grid-gap: 5px;
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
                grid-row-end: 9;
              
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

              .container img {
                vertical-align: middle;
                transition: all 0.3s ease-in-out 0s;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
              }

              .container:hover img {
                transform: scale(1.04);
                -moz-transform: scale(1.04);
                -webkit-transform: scale(1.04);
                -o-transform: scale(1.04);
              }

              .headline {
                position: absolute;
                top: 70%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.5);
                padding: 5px;
                width: 99%;
                font-size: 1.2vw;
                text-overflow: hidden;
                color: white;
              }

              @media only screen and (max-width: 1024px) {
               

              }
            
              @media only screen and (min-width: 1500px) {
                
              }
      `}</style> 
    </>
  );
}

export default TopNews;