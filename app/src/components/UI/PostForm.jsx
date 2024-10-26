import React, {useState} from "react";
import MyButton from 'D:/_Prog/frrfrr/react/app/src/components/UI/button/MyButton';
import MyInput from 'D:/_Prog/frrfrr/react/app/src/components/UI/input/MyInput.jsx';


const PostForm = ({create}) =>{
    
       // const [title, setTitle] = useState('');
    // const [descr, setDescr] = useState('');
//   const descrBody = useRef();
  const [post, setPost] =useState(
    {title:'', body:''}
);

const addNewPost = (e)=>{
    e.preventDefault();
    const NewPost={
        id:Date.now(),
        ...post
    }


    create(NewPost);
    setPost({title:'', body:''});
    
 }
    return(
        <form id='formNewPost'>
        <MyInput 
          type='text' 
          placeholder='Title of post' 
        //   value={title}
        //   onChange ={e => setTitle(e.target.value)}
        value={post.title}
        onChange={e=>setPost({...post, title:e.target.value})}
        />
        <MyInput 
            type='text' 
            placeholder='Descr of post' 
            // ref = {descrBody}
            // value={descr}
            // onChange={e =>setDescr(e.target.value)}
            value={post.body}
            onChange ={e=>setPost({...post, body: e.target.value})}
        />
        <MyButton  onClick={addNewPost}>Create post</MyButton>
      
      </form>
    )
}

export default PostForm;