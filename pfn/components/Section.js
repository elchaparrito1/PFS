import React from 'react';
import Container from '../components/Container';

const Section = (props) => {
// console.log(`${props.title.props.children}`);
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
                      <p className="link-title">{post.acf.title}</p>
                </a>
        </div>
      ))}
    </Container>

    <style jsx>{`        
            .grid-item {
              text-align: center;
              position: relative;
              z-index: 50;
            }

            .link-title {
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

            .link-title:hover {
              color: #E32222;
            }

            @media only screen and (max-width: 320px) {

            }

            @media only screen and (min-width: 321px) and (max-width: 767px) {

            }

            @media only screen and (min-width: 768px) and (max-width: 1024px) {

            }
    `}</style> 
  </>
)
}

export default Section;

