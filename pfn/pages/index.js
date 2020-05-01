import React from 'react';
import fetch from 'isomorphic-unfetch';
import Navbar from '../components/NavBar';
import Layout from '../components/Layout';
import Img from '../components/Image';
import Masonry from 'react-masonry-css';
import Section from '../components/Section';
import Head from 'next/head';
import '../public/navstyles.css';

const Home = ({posts}) => {

const arrayObject = [
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

//Sections array that gets JSX partials pushed to it from the filter functions
const Sections = [];

//For of loop to iterate over array of JSON, and put data into partial JSX components
for (const obj of arrayObject) {
  
  {obj.name === 'Image' ? 
    Sections.push(<Img key={obj.number} data={filterImages(posts, obj.number)}/>) : 
    Sections.push(<Section key={obj.id} title={<div className="title">{obj.name}</div>} data={filterLinks(posts, obj.id)}/>)
  }
}

//breakpoints for columns for Masonry package
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  1099: 2,
  630: 1
};

  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Pace News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Navbar />
          <div style={{paddingTop: "150px", marginLeft: "5%", marginRight: "5%"}}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                {Sections}
            </Masonry>
          </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://pfn-nextjs.flywheelsites.com/wp-json/wp/v2/posts/?per_page=100');
  const posts = await res.json();

  // console.log(posts);

  return {
    props: {
      posts,
    }
  }
}

export default Home;