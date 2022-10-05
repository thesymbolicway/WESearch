// import { useState, useEffect } from 'react';
import SingleReview from "./SingleReview";

function PlaceCard({place, handleDelete, reviews}) {

  // const [ reviews, setReviews ] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:9292/reviews')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }, []);
  // console.log(reviews)
  //   const matchedReview = reviews.find((review)=>review.place_id === place.id)
  //   console.log(matchedReview)
    
  return (
    <div className="card" id={place.id}>
      <p className="card-name">{place.name}</p>
      <p className="card-category"><span>{place.category}</span></p>
      <div className="card-image-container">
        <img className="card-image" src={place.image_url} alt={place.name} />
      </div>
      <div className="details">
        <p>Average Price Per Guest: <span>{place.price}$</span></p>
        <p> Address: <span>{place.location}</span></p>
        {place.reviews.length ? (<p>Reviews: {place.reviews.map((review) => <SingleReview review={review}/>)}</p>) : (<p>No reviews yet!</p>)}
        <button className="emoji-button delete" onClick={() => handleDelete(place.id)}>🗑</button>
        <button className="submit-button">Leave A Review</button>
      </div>
    </div>
  );
}

export default PlaceCard;