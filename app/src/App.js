import React, {useRef, useState} from 'react'
// import Counter from 'D:/_Prog/frrfrr/react/app/src/components/Counter';
// import CounterClass from 'D:/_Prog/frrfrr/react/app/src/components/CounterClass';
import './styles/app.css'
import ListofPosts from './components/ListofPosts';
import PostForm from './components/UI/PostForm';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'haha', body: 'descr'},
    {id:2, title:'haha', body: 'descr'},
    {id:3, title:'haha', body: 'descr'}
  ]);
  
   function createPost(newPost){
        setPosts([...posts, newPost]);
  }

  const removePost = (post) =>{
      setPosts(posts.filter(p=>p.id!==post.id));
  }

  return (
    <div className="App">
       <PostForm create={createPost}/>
      <ListofPosts remove={removePost} posts={posts} title="List of posts"/> 
      
    </div>
  );
}

 export default App;
