import React, {useState} from 'react'
// import Counter from 'D:/_Prog/frrfrr/react/app/src/components/Counter';
// import CounterClass from 'D:/_Prog/frrfrr/react/app/src/components/CounterClass';
import './styles/app.css'
import ListofPosts from './components/ListofPosts';

function App() {
  const [posts, setPost] = useState([
    {id:1, title:'haha', body: 'descr'},
    {id:2, title:'haha', body: 'descr'},
    {id:3, title:'haha', body: 'descr'}
  ]);

  return (
    <div className="App">
      <form id='formNewPost'>
        <input type='text' placeholder='Title of post'/>
        <input type='text' placeholder='Descr of post'/>
        <button>Create post</button>
      </form>

      <ListofPosts posts={posts} title="List of posts"/>
    </div>
  );
}

 export default App;
