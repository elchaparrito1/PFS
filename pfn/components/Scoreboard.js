import React, { useContext, useState } from 'react';
import { Element } from 'react-scroll';
import viewportContext from './viewportContext';
import FixtureSection from './FixtureSection'

const Scoreboard = ({
  title,
  eplStuff,
  ligaStuff,
  bundeStuff, 
  serieStuff, 
  mlsStuff,
  clStuff
}) => {
  const { width } = useContext(viewportContext);

  const leagues = ['EPL', 'LFP', 'DFL', 'LNPA', 'MLS', 'UCL']

  const [league, setLeague] = useState(leagues[0]);
  const [resOrFix, setResOrFix] = useState('Fixtures');
  const [activeBtn, setActiveBtn] = useState(null)

  const LEAGUE_SCOREBOARD = {
    EPL: <FixtureSection data={eplStuff[0]} error={eplStuff[1]} />,
    LFP: <FixtureSection data={ligaStuff[0]} error={ligaStuff[1]} />,
    DFL: <FixtureSection data={bundeStuff[0]} error={bundeStuff[1]} />,
    LNPA: <FixtureSection data={serieStuff[0]} error={serieStuff[1]} />,
    MLS: <FixtureSection data={mlsStuff[0]} error={mlsStuff[1]} />,
    UCL: <FixtureSection data={clStuff[0]} error={clStuff[1]} />
  }

  const handleClick = (index) => {
    setActiveBtn(index)
    setLeague(leagues[index])
  }

  return (
    <>
      <Element name={title}>
        <div className="content-div" style={width < 1200 ? {zIndex: "0"} : {zIndex: "50"}}>
          <div className="title">{title}-</div>
          <ul className="line-navbar">
            {leagues.map((league, index) => {
              return (
                <li key={index}>
                  <button 
                    className={activeBtn === index ? "league-item-active" : "league-item"}
                    name={league}
                    onClick={() => handleClick(index)}
                  >
                    <strong>{league}</strong>
                  </button>
                </li>
              )
            })}
          </ul>
          <ul className="line-navbar" style={{marginTop: '20px'}}>
              <li key="Fixtures">
                  <button 
                    className="league-item"
                    style={{fontSize: '14px'}}
                    name="Fixtures"
                    onClick={() => setResOrFix("Fixtures")}
                  >
                    <strong>Fixtures</strong>
                  </button>
              </li>
              <li key="Results">
                  <button 
                    className="league-item"
                    style={{fontSize: '14px'}}
                    name="Results"
                    onClick={() => setResOrFix("Results")}
                  >
                    <strong>Results</strong>
                  </button>
              </li>
            </ul>
          <div className="gallery">
            <figure className="gallery__item--feed">
            {!eplStuff[0] ? 
              '...loading' : 
              LEAGUE_SCOREBOARD[league]
            }
            </figure>
          </div>
        </div>
      </Element>
              
      <style>{`
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
                font-weight: bold;
                font-size: 32px;
                line-height: 39px;
                color: #363839;
                padding: 40px 40px 0 40px;
                margin-bottom: 30px;
              }
            
              .gallery {
                display: flex;
                justify-content: center;
                flex-direction: column;
              }

              .line-navbar {
                list-style: none;
                padding: 0 0 4px 0;
                text-align: left;
              }
              
              .line-navbar li { 
                display: inline-block; 
                border-right: 1px solid #ccc;
                margin: 5px 0;
              }
              
              .line-navbar li:last-of-type { 
                border-right: none; 
              }
              
              .line-navbar button {
                display: block;
                padding: 0 30px;
              }

              .league-item { 
                background: transparent;
                box-shadow: 0px 0px 0px transparent;
                border: 0px solid transparent;
                text-shadow: 0px 0px 0px transparent;
                font-weight: 300;
                font-size: 16px;
                text-align: right;
                text-transform: uppercase;
                font-style: normal;
                line-height: 20px;
                padding: 0.5rem 0;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                animation: 0.5s slideIn forwards;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
                color: #363839;
              }

              .league-item-active {
                background: transparent;
                box-shadow: 0px 0px 0px transparent;
                border: 0px solid transparent;
                text-shadow: 0px 0px 0px transparent;
                font-weight: 400;
                font-size: 16px;
                text-align: right;
                text-transform: uppercase;
                font-style: normal;
                line-height: 20px;
                padding: 0.5rem 0;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                animation: 0.5s slideIn forwards;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
                color: #E32222;
                animation-delay: 2s;
                text-decoration: underline;
              }

              .league-item:hover {
                color: #E32222;
                animation-delay: 2s; 
                text-decoration: underline;
              }

              .league-item:active { 
                outline: 0;
                border: none;
              }

              .league-item:focus:after {
                border-color: transparent;
                webkit-box-shadow: none;
                box-shadow: none;
                outline: 0;
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

export default Scoreboard;