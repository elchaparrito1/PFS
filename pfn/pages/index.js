import React from 'react';
import fetch from 'isomorphic-unfetch';
import Navbar from '../components/NavBar';
import Layout from '../components/Layout';
import Img from '../components/Image';
import Masonry from 'react-masonry-css';
import Section from '../components/Section';
import Head from 'next/head';
import '../public/navstyles.css';
import News from '../components/News';

const Home = ({posts}) => {

const sectionsArrayObject = [
  {
    name: 'Football Organizations',
    id: '11'
  },
  {
    name: 'Image',
    number: '1'
  },
  {
    name: 'Bundesliga',
    id: '9'
  },
  {
    name: 'Image',
    number: '2'
  },
  {
    name: 'Domestic Club Competitions',
    id: '12'
  },
  {
    name: 'Fantasy Leagues',
    id: '13'
  },
  {
    name: 'Image',
    number: '3'
  },
  {
    name: 'Image',
    number: '4'
  },
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
const topNews = posts.filter(post => post.categories == '6');

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
  default: 3,
  1100: 3,
  1099: 3,
  630: 2
};

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Pace News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/soccer.png" />
      </Head>
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
      <style>{`
        .news-wrapper {
          padding-top: 200px; 
          margin-left: 3%; 
          margin-right: 3%;
        }

        .section-wrapper {
          padding-top: 100px; 
          margin-left: 3%; 
          margin-right: 3%;
        }

        @media only screen and (min-width: 1500px) {
          .news-wrapper {
            margin-left: 15%; 
            margin-right: 15%;
          }

          .section-wrapper {
            margin-left: 10%; 
            margin-right: 10%;
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
  const res = process.env.NODE_ENV == 'development' 
    ? 
    await fetch('http://nextjs.local/wp-json/wp/v2/posts/?per_page=100')
    : 
    await fetch('https://pfn-nextjs.flywheelsites.com/wp-json/wp/v2/posts/?per_page=100');

  const posts = await res.json();

  // console.log(posts);

  return {
    props: {
      posts,
    }
  }
}

export default Home;