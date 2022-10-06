import '../css/popup.css'
import { useState } from 'react'

export default function CommentPopup(props) {
  const [name, setName] = useState(props.newPlace.name)
  const [category, setCategory] = useState(props.newPlace.category)
  const [price, setPrice] = useState(props.newPlace.price)
  const [location, setLocation] = useState(props.newPlace.location)
  const [image_url, setImage_url] = useState(props.newPlace.image_url)

  function handleSubmit(e) {
    e.preventDefault();
    const updatedPlace = { name, category, price, location, image_url };
    fetch(`http://localhost:9292/places/${props.newPlace.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPlace),
    })
    .then(props.setNewPlace(updatedPlace))
    .then(props.setTrigger(false))
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          required=""
          type="text"
          defaultValue={props.newPlace.name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="category"
          required=""
          type="text"
          defaultValue={props.newPlace.category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          name="price"
          required=""
          type="text"
          defaultValue={props.newPlace.price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          name="location"
          required=""
          type="text"
          defaultValue={props.newPlace.location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          name="image_url"
          required=""
          type="text"
          defaultValue={props.newPlace.image_url}
          onChange={(e) => setImage_url(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
        </form>
      </div>
    </div>
  ) : (
    ''
  )
}
