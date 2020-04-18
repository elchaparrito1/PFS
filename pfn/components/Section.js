import React from 'react';

const Section = (props) => (
  <>
    <div className="content-div">
      <div className="title">{props.title}</div>
        <div className="fields">
          <div className="grid-container">
            {props.data.map((post) => (
              <div className="grid-item" key={post.id}>
                      <a 
                        target="_blank"
                        rel="noopener noreferrer" 
                        alt={`Link to ${post.acf.title} homepage`} 
                        href={post.acf.url} >
                              <div className="neumorphic button_slide slide_right">
                          <button className="variation2 " tabIndex="-1">
                            {post.acf.title}
                          </button>
                  </div>
                      </a>
              </div>
            ))}
          </div>
        </div>
    </div>

    <style jsx>{`
            .content-div {
              align-self: start;
              padding: 60px 35px 35px 35px;
              border-radius: 10px;
              background: #ecf0f3;
              box-shadow: 13px 13px 20px #cbced1,
                          -13px -13px 20px #ffffff;
            }

            .title {
              position: relative;
              border-radius: 10px;
              text-align: center;
              font-size: 20px;
              padding: 10px;
              letter-spacing: 0.5px;
              background: #014899;
              box-shadow: 3px 3px 8px #b1b1b1,
                          -3px -3px 8px #ffffff;
              transition: 0.5s;
              color: white;
            }

            .fields {
              width: 100%;
              padding: 50px 5px 5px 5px;
            }
        
            .neumorphic {
              box-shadow: inset 5px 5px 5px #cbced1,
                          inset -5px -5px 5px #ffffff;
              width: 200px;
              height: 50px;
              border-radius: 10px;
              overflow: hidden;
              position: relative;
              cursor: pointer;
            }
        
            .variation2 {
              font-family: 'Do Hyeon', sans-serif;
              color: gray;
              cursor: pointer;
              border: none;
              border-radius: 10px;
              background-color: transparent;
              font-size: 1rem;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
        
            .grid-container {
              display: grid;
              grid-template-columns: auto;
              grid-gap: 15px;
              justify-items: center;
              align-items: center;
            }
        
            .grid-item {
              text-align: center;
            }
        
            .button_slide {
              -webkit-transition: ease-out 0.8s;
              -moz-transition: ease-out 0.8s;
              transition: ease-out 0.8s;
            }
        
            .slide_right:hover {
              box-shadow: inset 400px 0 0 0 #014899;
            }
        
            .slide_right:hover .variation2 {
              color: white;
              -webkit-transition: ease-out 0.8s;
              -moz-transition: ease-out 0.8s;
              transition: ease-out 0.8s;
            }

            @media only screen and (min-width: 1500px) {
              .grid-container {
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 15px;
                justify-items: center;
                align-items: center;
              }
            }
    `}</style> 
  </>
)

export default Section;

