import { useState } from 'react'
import SingleReview from './SingleReview'
import CommentPopup from './CommentPopup'

function PlaceCard({ place, handleDelete }) {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [newPlace, setNewPlace] = useState(place)

  return (
    <div className="card" key={newPlace.id} id={newPlace.id}>
      <p className="card-name">{newPlace.name}</p>
      <p className="card-category"> 
        <span>{newPlace.category}</span>
      </p>
      <div className="card-image-container">
        <img className="card-image" src={newPlace.image_url} alt={newPlace.name} />
      </div>
      <div className="details">
        <p>
          Average Price Per Guest: <span>${newPlace.price}</span>
        </p>
        <p>
          {' '}
          Address: <span>{newPlace.location}</span>
        </p>
        {place.reviews.length ? (
          <p>
            <span>Reviews:</span>
            {place.reviews.map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </p>
        ) : (
          <p>No reviews yet!</p>
        )}
        <button
          className="emoji-button-delete"
          onClick={() => handleDelete(newPlace.id)}
        >
          🗑
        </button>
        <button className="submit-button" onClick={() => setButtonPopup(true)}>
          Edit Place
        </button>
        <CommentPopup
          newPlace={newPlace}
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          setNewPlace={setNewPlace}
        />
      </div>
    </div>
  )
}

export default PlaceCard
