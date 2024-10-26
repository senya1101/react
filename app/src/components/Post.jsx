import React from "react";
import MyButton from "./UI/button/MyButton";

const Post = (props)=>{
  
    return(
        <div className='post'>
        <div className='post_content'>
          <h2>{props.number}.  {props.post.title}</h2>
            <div>
              <p>{props.post.body}</p>
            </div>
        </div>
        <div>
          <MyButton onClick={()=>props.remove(props.post)}> Delete post</MyButton>
        </div>
      </div>
    )
}

export default Post;