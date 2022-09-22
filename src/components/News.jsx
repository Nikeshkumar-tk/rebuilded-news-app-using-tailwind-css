import React, { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import NewsCard from './NewsCard'



const News = ({searchKey}) => {

  const [news, setNews] = useState([])
 


    //Function to fetch news

  
  useEffect(()=>{

    const fetchNews=async()=>{
  

      await axios.request(
        {
         method: 'GET',
         url: 'https://bing-news-search1.p.rapidapi.com/news/search',
         params: {
           q: `${searchKey||"trending"}`,
           freshness: 'Day',
           originalImg: 'true',
           textFormat: 'Raw',
           safeSearch: 'Off'
         },
         headers: {
           'X-BingApis-SDK': 'true',
           'X-RapidAPI-Key': '39917aa29amshb5bebf0758c9345p197919jsn308218859cd1',
           'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
         }
        }
       ).then((res)=>{
        
        console.log(res)
        setNews(res.data.value)
      
      })
  
    }

    fetchNews()
    
  },[searchKey])
 
  return (
    <div className='w-screen sm:grid md:grid-cols-2 xl:grid-cols-3 pt-20 px-10'>
       {
news.map((news)=>{
// console.log(news.image.thumbnail.contentUrl)

news.image?.contentUrl&&console.log(news.image.contentUrl)
 
    return(
      <div className=''>


        <NewsCard news={news} />
      </div>
    )
})

       }
    </div>
  )
}

export default News