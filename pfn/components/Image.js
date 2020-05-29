import React from 'react';

const Image = (props) => {

  const pic = props.data[0].acf

  return (
  <>
    <div className="content-div">
        <div className="fields">
          <div className="grid-container">
            <div className="grid-item">
              <img 
                  key={props.data[0].id}
                  className="images"
                  src={pic.lg} 
                  alt="test image" 
              />
            </div>
          </div>
        </div>
    </div>

    <style jsx>{`
            .content-div {
              align-self: start;
              padding: 35px 35px 35px 35px;
              border-radius: 10px;
              background: none;
            }

            .fields {
              width: 100%;
              padding: 5px 5px 5px 5px;
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

            .images {
              max-width: 100%;
              height: auto;
              box-shadow: 13px 13px 20px #cbced1,
                          -13px -13px 20px #ffffff;
              border-radius: 5px;
            }
    `}</style> 
  </>
)
          }

export default Image;
