import React from 'react';
import Container from '../components/Container';

const Section = (props) => {
console.log(`${props.title.props.children}`);
return (
  <>
    <Container title={props.title} name={`${props.title.props.children}`} id={`${props.title.props.children}`}>
      {props.data.map((post) => (
        <div className="grid-item" key={post.id}>
                <a 
                  target="_blank"
                  rel="noopener noreferrer" 
                  alt={`Link to ${post.acf.title} homepage`} 
                  href={post.acf.url} >
                  <div className="neumorphic button_slide slide_right">
                    <button className="variation2" tabIndex="-1">
                      {post.acf.title}
                    </button>
                  </div>
                </a>
        </div>
      ))}
    </Container>

    <style jsx>{`
            .neumorphic {
              box-shadow: inset 5px 5px 5px #cbced1,
                          inset -5px -5px 5px #ffffff;
              width: 200px;
              height: 40px;
              border-radius: 5px;
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
              font-size: 1rem;
              position: relative;
              top: 50%;
              transform: translateY(-50%);
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

            @media only screen and (max-width: 1024px) {
              .neumorphic {
                width: 100px;
                height: 20px;
              }

              .variation2 {
                font-size: 0.5rem;
                display: inline-block;
                vertical-align: middle;
                position: relative;
                top: 0;
                transform: none;
              }
            }
    `}</style> 
  </>
)
}

export default Section;

