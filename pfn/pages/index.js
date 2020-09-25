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
    name: 'English Premier League',
    id: '1298'
  },
  {
    name: 'YouTube Football Channels',
    id: '1309'
  },
  {
    name: 'La Liga',
    id: '29'
  },
  {
    name: 'Football Merch',
    id: '1286'
  },
  {
    name: 'Serie A',
    id: '1299'
  },
  {
    name: '2022 FIFA World Cup Qatar News',
    id: ''
  },
  {
    name: 'Bundesliga',
    id: '1300'
  },
  {
    name: 'Fantasy Football/Soccer Leagues',
    id: '1288'
  },
  {
    name: 'France Ligue 1',
    id: '1301'
  },
  {
    name: 'FIFA World Rankings',
    id: '1289'
  },
  {
    name: 'MLS Soccer',
    id: '1302'
  },
  {
    name: 'The Beautiful Game',
    id: ''
  },
  {
    name: 'Liga MX',
    id: '1303'
  },
  {
    name: 'Football Organizations',
    id: '1291'
  },
  {
    name: 'Brasileirão Série A',
    id: '1304'
  },
  // {
  //   name: "Women's Leagues",
  //   id: ''
  // },
  {
    name: 'Eredivisie',
    id: '1305'
  },
  {
    name: 'National Team Websites',
    id: '1293'
  },
  {
    name: 'Superliga Argentina',
    id: '1306'
  },
  {
    name: 'Top World Players',
    id: '1294'
  },
  {
    name: 'Football Legends',
    id: ''
  },
  {
    name: 'International Club Competitions',
    id: '1296'
  },
  {
    name: 'Domestic Club Competitions',
    id: '1297'
  },
  // {
  //   name: 'Image',
  //   number: '4'
  // },
]

//Function to filter links into each one's assigned grouping 
const filterLinks = (data, val) => {
  let result = data.filter(post => post.categories == val);
  
  return result;
}

//Function to filter images into each one's assigned section on page 
const filterImages = (data, val) => {
  let result = data.filter(post => post.categories == '10' && post.acf.number == val.toString());
  
  return result;
}

//Variable containing filter data for top news posts
const topNews = posts.filter(post => post.categories == '1284');

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
      </Head>
        <viewportContext.Provider value={{width}}>
          <Layout>
            <Navbar />
              <div className="news-wrapper">
                <News data={topNews}/>
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
  const res = await fetch('https://pacefootballnews.com/wp-json/wp/v2/posts/?per_page=900');

  const posts = await res.json();

  // console.log(posts);

  return {
    props: {
      posts,
    }
  }
}

export default Home;