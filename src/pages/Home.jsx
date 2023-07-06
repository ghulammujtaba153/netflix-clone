import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
import Footer from '../components/Footer'


const Home = () => {
  const data = [
    {
      rid: 1,
      title: 'Up Coming',
      fetchURL: requests.requestUpcoming
    },
    {
      rid: 2,
      title: 'Horror',
      fetchURL: requests.requestHorror
    },
    {
      rid: 3,
      title: 'Trending',
      fetchURL: requests.requestTrending
    },
    {
      rid: 4,
      title: 'TopRated',
      fetchURL: requests.requestTopRated
    },
    {
      rid: 5,
      title: 'Popular',
      fetchURL: requests.requestPopular
    }
    
  ];
  return (
    <>
      <Main/>
      
      {data.map((item, index) => (
        <Row key={index} title={item.title} fetchURL={item.fetchURL} rid={item.rid} />
      ))}

      <Footer/>
    
      
    </>
  )
}

export default Home