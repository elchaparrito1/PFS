import React from 'react';
import { Element } from 'react-scroll';

const Container = (props) => {

return (
  <>
    <Element name={props.id} style={{background: "none", borderRadius: "40px"}}>
      <div className="content-div">
        <div className="title">{props.title}</div>
          <div className="fields">
            <div className="grid-container">
              {props.children}
            </div>
          </div>
      </div>
    </Element>

    <style jsx>{`
            .content-div {
              align-self: start;
              padding: 60px 35px 35px 35px;
              margin: 0 auto;
              margin-bottom: 50px;
              background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
              background-blend-mode: soft-light, normal;
              box-shadow: -10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD;
              border-radius: 40px;
            }

            .title {
              text-align: center;
              font-style: normal;
              font-weight: bold;
              font-size: 32px;
              line-height: 30px;
              color: #363839;
              padding: 40px;
            }

            .fields {
              width: 100%;
              padding: 30px 5px 15px 5px;
            }
        
            .grid-container {
              display: grid;
              grid-template-columns: auto;
              grid-gap: 15px;
              justify-items: center;
              align-items: center;
            }

            @media only screen and (max-width: 320px) {
              .content-div {
                align-self: start;
                padding: 5px;
                border-radius: 40px;
                margin: 0 auto;
                margin-bottom: 30px;
              }

              .title {
                font-size: 16px;
                padding: 20px 2px 2px 2px;
              }

              .grid-container {
                grid-gap: 5px;
              }
            }

            //iphone 5S landscape
            @media only screen and (min-width: 321px) and (max-width: 767px) and (orientation: landscape) {
              .title {
                font-size: 20px;
                padding: 20px 2px 2px 2px;
              }

              .grid-container {
                grid-gap: 5px;
              }
            }

            @media only screen and (min-width: 321px) and (max-width: 767px) {
              .content-div {
                padding: 10px;
              }

              .title {
                font-size: 20px;
                padding: 20px 0px 2px 0px;
              }

              .grid-container {
                grid-gap: 5px;
              }
            }

            @media only screen and (min-width: 1900px) {
              .grid-container {
                grid-template-columns: auto auto;
              }
            }

            @media only screen and (min-width: 768px) and (max-width: 1024px) {
              .content-div {
                align-self: start;
                padding: 15px;
                border-radius: 40px;
                margin: 0 auto;
                margin-bottom: 30px;
              }

              .grid-container {
                grid-template-columns: auto auto;
              }

              .title {
                font-size: 25px;
                padding: 20px;
              }
            }

            @media only screen and (max-width: 767px) {
              
            }
    `}</style> 
  </>
)
}

export default Container;

