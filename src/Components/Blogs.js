import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'


const Blogs = () => {

    const {loading,posts} = useContext(AppContext)
    // console.log("posts",posts);

  return (
    <div className='w-11/12 max-w-[630px] mt-20'>
        {
            loading ? (<div className='loader'></div>) : (posts.length === 0) ? (<div>No posts found</div>) : (
                posts.map((post) => (
                    <div key={post.id} className='mb-5'>
                        <p className='text-xl font-bold'>{post.title}</p>
                        <p>By <span className=' font-serif'>{post.author}</span> on <span className='underline'>{post.category}</span></p>
                        <p>Posted on <span>{post.date}</span></p>
                        <p>{`${post.content.substring(0,250)}...`}</p>
                        <div>
                          {
                            post.tags.map((tag, index) => (
                              <span className='pl-2 mt-5 font-medium text-green-950' key={index}>#{tag}</span>
                            ))
                          }
                        </div>
                    </div>
                ))
            )

        }
    </div>
  )
}

export default Blogs