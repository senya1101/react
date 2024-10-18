import React from "react";


const Post = (props)=>{
  
    return(
        <div className='post'>
        <div className='post_content'>
          <h2>{props.post.id}.  {props.post.title}</h2>
            <div>
              <p>{props.post.body}</p>
            </div>
        </div>
        <div>
          <button> Delete post</button>
        </div>
      </div>
    )
}

export default Post;