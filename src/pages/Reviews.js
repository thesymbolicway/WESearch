import PlaceCard from './PlaceCard'
import { useState, useEffect } from 'react'

export default function Reviews() {
  const [places, setPlaces] = useState([])

  //grabbing all of our places
  useEffect(() => {
    fetch('http://localhost:9292/places')
      .then((res) => res.json())
      .then((data) => setPlaces(data))
  }, [])

  //sending delete request with said instance
  const handleDelete = (id) => {
    fetch(`http://localhost:9292/places/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(setPlaces(places.filter((place) => place.id !== id)))
  }

  //getting all reviews
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])

  //creating a search function for our list of places
  const [searchTerm, setSearchTerm] = useState('')

  const placesToDisplay = places.filter((place) =>
    (place.name + place.category + place.location)
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  )

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }
  const [selectedCategory, setSelectedCategory] = useState("places")

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value)
  }
  
  let filteredPlaces = placesToDisplay.filter(placeObj => {
    if (selectedCategory === "places") return true;
  
    return (placeObj.category === selectedCategory)
  })


  return (
    <>
      <h1 className="title">Reviews</h1>
      <div className="drop-container">
        <select className="dropdown"  onChange={handleSelectedCategory}>
          <option value="places">ALL</option>
          <option value="Restaurants">Restaurant</option>
          <option value="Auto">Auto</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Venues">Venue</option>
        </select>
      </div>
      <input
        type="text"
        className="search-Btn"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <div className="review-container">
        <div className="cards">
          {filteredPlaces.map((place) => {
            return (
              <PlaceCard
                key={place.id}
                place={place}
                reviews={reviews.filter(
                  (review) => review.place_id === place.id,
                )}
                handleDelete={handleDelete}
              />
            )
          })}
        </div>
      </div>
    </>
  )
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
