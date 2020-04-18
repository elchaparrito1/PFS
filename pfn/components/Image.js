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
                  className="images"
                  srcset={`${pic.sm} 640w, 
                            ${pic.md} 768w, 
                            ${pic.lg} 1024w,
                            ${pic.lg} 1366w`} 
                  sizes="100vw" 
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
              background: #ecf0f3;
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
              width: 100%;
              box-shadow: 13px 13px 20px #cbced1,
                          -13px -13px 20px #ffffff;
            }
    `}</style> 
  </>
)
          }

export default Image;
