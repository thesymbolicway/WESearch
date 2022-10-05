import PlaceCard from "./PlaceCard"
import { useState, useEffect } from "react";

export default function Reviews() {

  const [ places, setPlaces ] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/places')
    .then(res => res.json())
    .then(data => setPlaces(data))
  }, [places]);

  const handleDelete = e => {
    fetch(`http://localhost:9292/places/${e.target.parentNode.parentNode.id}`, {
      method: 'DELETE'})
    .then(res => res.json())
    .then(setPlaces(places.filter(place => place.id !== e.target.parentNode.parentNode.id)))
    };

  return (
    <>
      <h1 className="title">Reviews</h1>
      <div className="drop-container">
        <select className="dropdown" name="places" id="places">
          <option value="all">ALL</option>
          <option value="restaurant">Restaurant</option>
          <option value="auto">Auto</option>
          <option value="entertainment">Entertainment</option>
          <option value="venue">Venue</option>
        </select>
      </div>
      <input type="text" placeholder="Search.."></input>
      <div className="review-container">
        <ul className="cards">
          {places.map(place => {
            return <PlaceCard key={place.id} place={place} handleDelete={handleDelete}/>
          })}
        </ul>
      </div>
    </>
  );
}

//handleDelete={handleDelete} add to line 36 when ready

