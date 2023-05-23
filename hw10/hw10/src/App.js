import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [number, setNumber] = useState();
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    async function getPost(postId) {
      setLoading(true)
      const apiResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const post = await apiResponse.json();
      setPost(post);
      setLoading(false)
    }
    getPost(number)
},[number])

  const options = [1,2,3,4,5,6,7,8,9,10]
  const changeNumber = (e) => {
      setNumber(e.target.value)
  }
  return (
    <div className="App">
      <select onChange={changeNumber
      }>
        {options.map((option) => {
          return <option key={option}>{option}</option>
        })}
      </select>
      <button>get a fact</button>
      {post && !loading &&
      <>
      <p>Post title: {post.title}</p>
      <p>Post body: {post.body}</p>
      </>
      }
    </div>
  );
}

export default App;
