import React, {useState} from "react";
import Post from "D:/_Prog/frrfrr/react/app/src/components/Post.jsx";
const ListofPosts = ({remove, posts, title}) =>{
    

    return(
        <div className="ListofPosts">
            <h1 style={{textAlign: 'center'}}>{title}</h1>

            {
            posts.map((post, index) => 
            <Post remove={remove} number={index +1} post={post} key={post.id}/>)
            }

        </div>
    )
}

export default ListofPosts;