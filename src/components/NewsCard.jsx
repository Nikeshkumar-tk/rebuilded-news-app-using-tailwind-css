import React from 'react'

const NewsCard = ({news}) => {
   
  return (
    <div className='h-96 w-96 pb-8  m-5 flex flex-col items-center gap-y-9 text-center border border-gray-800  hover:scale-105  hover:z-10 transition-all duration-150 justify-center'>
        <div>
        <img src={news.image?.contentUrl||news.image?.thumbnail?.contentUrl} className='h-64 object-cover'/>
        </div>
       
            <h4 className='mb truncate w-96 px-3 '>
                {news.name}
            </h4>
       
    </div>
  )
}

export default NewsCard