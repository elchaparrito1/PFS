import React, {useState, useEffect} from 'react';
import fetch from 'isomorphic-unfetch';
import Navbar from '../components/NavBar';
import Layout from '../components/Layout';
import Img from '../components/Image';
import Masonry from 'react-masonry-css';
import Section from '../components/Section';
import Head from 'next/head';
import '../public/navstyles.css';
import News from '../components/News';
import SectionalNews from '../components/SectionalNews';
import viewportContext from '../components/viewportContext';


const Home = ({posts}) => {
    const [width, setWidth] = useState(null);
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    }
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    if (process.browser) {
      useEffect(() => setWidth(document.children[0].clientWidth), [
      document.children[0].clientWidth
      ])
    }

const sectionsArrayObject = [
  {
    name: 'Current League Tables',
    id: '1285'
  },
  {
    name: 'YouTube Football Channels',
    id: '1309'
  },
  {
    name: 'Football Merch',
    id: '1286'
  },
  {
    name: 'Football Talk',
    id: '1316'
  },
  // {
  //   name: 'Football Podcasts',
  //   id: ''
  // },
  {
    name: '2022 FIFA World Cup Qatar News',
    id: '1287'
  },
  {
    name: 'Fantasy Football/Soccer Leagues',
    id: '1288'
  },
  {
    name: 'FIFA World Rankings',
    id: '1289'
  },
  {
    name: 'The Beautiful Game',
    id: '7'
  },
]

//Function to filter links into each one's assigned grouping 
const filterLinks = (data, val) => {
  let result = data.filter(post => post.categories == val);
  
  return result;
}

//Function to filter images into each one's assigned section on page 
// const filterImages = (data, val) => {
//   let result = data.filter(post => post.categories == '10' && post.acf.number == val.toString());
  
//   return result;
// }

//Variable containing filter data for top news posts
const topNews = posts.filter(post => post.categories == '1284');
const epl = posts.filter(post => post.categories == '1311');
const liga = posts.filter(post => post.categories == '1312');
const bund = posts.filter(post => post.categories == '1313');
const serie = posts.filter(post => post.categories == '1314');
const mls = posts.filter(post => post.categories == '1315');

//Sections array that gets JSX partials pushed to it from the filter functions
const sections = [];

//For/of loop to iterate over array of JSON data, and put data into partial JSX components
for (const obj of sectionsArrayObject) {
  {obj.name === 'Image' ? 
    sections.push(<Img key={obj.number} data={filterImages(posts, obj.number)}/>) : 
    sections.push(<Section key={obj.id} title={<div className="title">{obj.name}</div>} data={filterLinks(posts, obj.id)}/>)
  }
}

//breakpoints for columns for Masonry package
const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  1099: 2,
  630: 2
};

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Pace Football News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/PFN.svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149200137-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
          
            gtag('config', 'UA-149200137-1');
              `,
          }}
        />

      </Head>
        <viewportContext.Provider value={{width}}>
          <Layout>
            <Navbar />
              <div className="news-wrapper">
                <News data={topNews}/>
              </div>
              <div className="news-section-wrapper">
                <SectionalNews title={'English Premier League News'} data={epl}/>
              </div>
              <div className="news-section-wrapper">
                <SectionalNews title={'La Liga News'} data={liga}/>
              </div>
              <div className="news-section-wrapper">
                <SectionalNews title={'Bundesliga News'} data={bund}/>
              </div>
              <div className="news-section-wrapper">
                <SectionalNews title={'Serie A News'} data={serie}/>
              </div>
              <div className="news-section-wrapper">
                <SectionalNews title={'Major League Soccer News'} data={mls}/>
              </div>
              <div className="section-wrapper">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                    {sections}
                </Masonry>
              </div>
          </Layout>
        </viewportContext.Provider>
      <style>{`
        .news-wrapper {
          padding-top: 200px; 
          margin-left: 10%; 
          margin-right: 20%;
        }

        .news-section-wrapper {
          padding-top: 100px; 
          margin-left: 10%; 
          margin-right: 20%;
        }

        .section-wrapper {
          padding-top: 100px; 
          margin-left: 10%; 
          margin-right: 20%;
        }

        @media only screen and (min-width: 1500px) {
          .news-wrapper {
            margin-left: 10%; 
            margin-right: 20%;
          }

          .news-section-wrapper {
            margin-left: 10%; 
            margin-right: 20%;
          }

          .section-wrapper {
            margin-left: 10%; 
            margin-right: 20%;
          }
        }

        @media only screen and (max-width: 1024px) {
          .news-wrapper {
            padding-top: 150px;
            margin-left: 5%; 
            margin-right: 5%;
          }

          .news-section-wrapper {
            padding-top: 50px;
            margin-left: 5%; 
            margin-right: 5%;
          }

          .section-wrapper {
            padding-top: 50px;
            margin-left: 4%; 
            margin-right: 4%;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pace-cms.com/wp-json/wp/v2/posts/?per_page=900');

  const posts = await res.json();

  // console.log(posts);

  return {
    props: {
      posts,
    }
  }
}

export default Home;