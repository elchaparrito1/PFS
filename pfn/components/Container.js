import React from 'react';

const Container = (props) => {
console.log(props.title);
return (
  <>
    <div className="content-div">
      <div id={props.title} className="title">{props.title}</div>
        <div className="fields">
          <div className="grid-container">
            {props.children}
          </div>
        </div>
    </div>

    <style jsx>{`
            .content-div {
              align-self: start;
              padding: 60px 35px 35px 35px;
              border-radius: 5px;
              background: #ecf0f3;
              box-shadow: 13px 13px 20px #cbced1,
                          -13px -13px 20px #ffffff;
            }

            .title {
              position: relative;
              text-align: center;
              font-size: 20px;
              padding: 10px;
              letter-spacing: 0.5px;
              color: gray;
            }

            .fields {
              width: 100%;
              padding: 50px 5px 5px 5px;
            }
        
            .grid-container {
              display: grid;
              grid-template-columns: auto;
              grid-gap: 15px;
              justify-items: center;
              align-items: center;
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
}

export default Container;

// .title {
//   position: relative;
//   border-radius: 5px;
//   text-align: center;
//   font-size: 20px;
//   padding: 10px;
//   letter-spacing: 0.5px;
//   background: #014899;
//   box-shadow: 3px 3px 8px #b1b1b1,
//               -3px -3px 8px #ffffff;
//   transition: 0.5s;
//   color: white;
// }

