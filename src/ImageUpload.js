import React, { useState } from 'react'; 
import './ImageUpload.css'

function ImageUpload(){
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ukh8omsp')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dukg18qkq/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="App">
      {/* <h1>Upload Image</h1> */}
      <input
        className="file_upload"
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Uploading...</h3>
      ) : (
        <img className="newImage"src={image} style={{ width: '200px'}} />
      )}
    </div>
  )
}

export default ImageUpload