import PlaceCard from "./PlaceCard"
import { useState, useEffect } from "react";

export default function Reviews() {
  
  const [ places, setPlaces ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/places')
    .then(res => res.json())
    .then(data => setPlaces(data))
  }, []);

  const handleDelete = id => {
    fetch(`http://localhost:9292/places/${id}`, {
      method: 'DELETE'})
    .then(res => res.json())
    .then(setPlaces(places.filter(place => place.id !== id)))
    };

    const [ reviews, setReviews ] = useState([])

    useEffect(() => {
      fetch('http://localhost:9292/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
    }, []);

      return (
        <>
      <h1 className="title">Reviews</h1>
      <div className="drop-container">
        <select className="dropdown" name="places" id="places">
          <option value="places">ALL</option>
          <option value="Restaurants">Restaurant</option>
          <option value="Auto">Auto</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Venues">Venue</option>
        </select>
      </div>
      <input type="text" className="search-Btn"placeholder="Search.."></input>
      <div className="review-container">
        <div className="cards">
          {places.map(place => {
            return <PlaceCard key={place.id} place={place} reviews={reviews.filter((review)=>review.place_id === place.id)} handleDelete={handleDelete}/>
          })}
        </div>
      </div>
    </>
  );
}


// const [ selectedDropdown, setSelectedDropdown ] = useState("");

// const handleChange = e => {
//   e.preventDefault();
//   // console.log(selectedDropdown)
//   setSelectedDropdown(e.target.value)
//   console.log(selectedDropdown)
// };  

// useEffect(() => {
//   fetch(`http://localhost:9292/places/category_sort/${selectedDropdown}`)
//   .then(res => res.json())
//   .then(data => setPlaces(data))
// }, [selectedDropdown]);