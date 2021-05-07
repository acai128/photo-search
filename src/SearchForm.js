import React, {useState} from 'react'; 
import axios from 'axios'; 
import ImageUpload from './ImageUpload'; 
import './SearchForm.css';

function SearchForm(){
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value)
  }

  function handleClick(event) {
    console.log(photo)

    const url = "https://pixabay.com/api"
    const API_Key = `${process.env.REACT_APP_API_KEY}`

    axios.get(`${url}/?key=${API_Key}&q=${photo}&safesearch=true`)
    .then((response) => {
      console.log(response); 
      setResult(response.data.hits)
    });
  }
  return (
    <div className="search">
        <h1 className="title">Photo Search</h1>
        <input 
        onChange={handleChange}
        type="text" 
        name="photo" 
        placeholder="Enter keyword(s)"
        />
        <button onClick={handleClick} type="submit">Search</button>
        <ImageUpload />
        {result.map((img) => {
          return (
            <a href={img.largeImageURL} target="_blank">
              <img
                width="200"
                height="200"
                src={img.webformatURL}
                alt={img.tags}
                key={img.id}
              />
            </a>
          );
        })}
    </div>
  )
}

export default SearchForm