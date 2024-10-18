import React, {useState} from "react";
import Post from "D:/_Prog/frrfrr/react/app/src/components/Post.jsx";
const ListofPosts = ({posts, title}) =>{
    

    return(
        <div className="ListofPosts">
            <h1 style={{textAlign: 'center'}}>{title}</h1>

            {
            posts.map(post => 
            <Post post={post} key={post.id}/>)
            }

        </div>
    )
}

export default ListofPosts;