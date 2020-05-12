import React from 'react';

const TopNews = (props) => {

  const testData = [
    {
      id: 1,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 2,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 3,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 4,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 5,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    },
    {
      id: 6,
      title: "Fate of the European Super League will define the future of football",
      url: "www.google.com",
    }
  ]

console.log(props);

return (
    <>
      <div className="content-div">
        <div className="title">Top News</div>
          <div className="fields">
            <div className='grid-container'>
              <div className="main neumorphic">
                <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
                <div className="feed-neumorphic">
                  <div className="link-grid-container">
                    <div className="feed">Feed</div>
                      {testData.map((post) => (
                        <div className="grid-item" key={post.id}>
                          <a 
                            target="_blank"
                            rel="noopener noreferrer" 
                            alt={`Link to homepage`} 
                            href={post.url} >
                              <div className="link-neumorphic button_slide slide_right">
                                <button className="variation2" tabIndex="-1">
                                  {post.title}
                                </button>
                              </div>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="second neumorphic">
                  <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
                <div className="third neumorphic">
                  <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
                <div className="fourth neumorphic">
                  <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
                <div className="fifth neumorphic">
                  <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
                <div className="sixth neumorphic">
                  <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
                <div className="seventh neumorphic">
                  <div className="container">
                    <img src="https://res.cloudinary.com/dzj8uhlzg/image/upload/c_scale,q_auto:best,w_1024/v1586802116/sample.jpg" 
                    alt="Snow" 
                    style={{width: "100%", borderRadius: "5px", verticalAlign: "middle"}} 
                    />
                    <div className="centered">UK government to allow Premier League restart on June 12 but so many questions still need answers</div>
                  </div>
                </div>
            </div>
        </div>
      </div>
              
      <style jsx>{`
              .content-div {
                align-self: start;
                padding: 30px 30px 30px 30px;
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: 13px 13px 20px #cbced1,
                            -13px -13px 20px #ffffff;
              }
            
              .title {
                position: relative;
                text-align: center;
                font-size: 28px;
                letter-spacing: 0.5px;
                color: gray;
              }

              .feed {
                position: relative;
                text-align: center;
                font-size: 28px;
                letter-spacing: 0.5px;
                padding: 15px;
                color: gray;
              }
            
              .fields {
                width: 100%;
                padding: 50px 5px 5px 5px;
              }

              .grid-container {
                display: grid;
                grid-template-columns: repeat(3, minmax(auto, 1fr));
                grid-template-rows: repeat(auto, 1fr);
                grid-gap: 1.5rem;
                
              }
               
              .container img {
                vertical-align: middle;
              }

              .centered {
                position: absolute;
                top: 80%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.5);
                padding: 3px;
                width: 80%;
              }

              .container {
                position: relative;
                text-align: left;
                color: white;
                padding: 15px;
              }
              
              .content {
                position: absolute;
                bottom: 0;
                color: gray;
                text-align: left;
                padding: 10px;
              }
            
              .main {  
                grid-column: 1 / 3;
                grid-row: auto;                
                align-items: center;
                text-align: center;
                position: relative;
              }

              .feed-neumorphic {  
                grid-column: 3;
                grid-row: auto;                
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: inset 5px 5px 5px #cbced1,
                          inset -5px -5px 5px #ffffff;
                transition: all 2s ease-in-out;
                min-height: 150px;
                max-height: 500px;
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
            
              .second { 
                grid-column: 1 ;
                grid-row: auto;
                overflow: hidden;
              }
            
              .third {  
                grid-column: 2;
                grid-row: auto;
              }
            
              .fourth {  
                grid-column: 3;
                grid-row: auto;
              }
            
              .fifth {  
                grid-column: 1;
                grid-row: auto;
              }

              .sixth {  
                grid-column: 2;
                grid-row: auto;
              }
            
              .seventh {  
                grid-column: 3;
                grid-row: auto;
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
              }

              .variation2 {
                font-family: 'Do Hyeon', sans-serif;
                color: gray;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                background-color: transparent;
                font-size: 0.8rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
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

              .neumorphic {
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: inset 5px 5px 5px #cbced1,
                          inset -5px -5px 5px #ffffff;
                transition: all 0.5s ease-in-out;
              }

              .neumorphic:hover {
                  border-radius: 5px;
                  background: #014899;
                  box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                  cursor: pointer;
              }
            
              @media only screen and (min-width: 1500px) {
                
              }
      `}</style> 
    </>
  );
}

export default TopNews;