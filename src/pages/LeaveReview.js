import { useState, useEffect } from 'react';
import PlacesPopup from './PlacesPopup';

export default function LeaveReview() {
  const [user_id, setName] = useState('')
  const [place_id, setPlace] = useState('')
  const [review, setReview] = useState('')
  const [star_rating, setStar_rating] = useState('')
  const [name, setUserName] = useState('')
  const [users, setUsers] = useState('')
  const [buttonPopup, setButtonPopup] = useState(false)

  //fetching all users
  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [users])

  //setting variable to the new user
  const userId = users.length + 1

  //creates a new user
  function handleSubmitUser(e) {
    e.preventDefault()
    const user = { name }
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then(setUserName(''))
  }

  //submits a new review
  function handleSubmit(e) {
    e.preventDefault()
    const newReview = { user_id, review, place_id, star_rating }
    fetch('http://localhost:9292/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    }).then(setName(''), setPlace(''), setReview(''), setStar_rating(''))
  }

  //setting state to button to change its text after 2 second
  const text = 'Submit'
  const [buttonText, setButtonText] = useState(text)

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText(text)
    }, 2000)
    return () => clearTimeout(timer)
  }, [buttonText])
  return (
    <>
      <div>
        <h1 className="title">New User?</h1>
        <form className="form" onSubmit={handleSubmitUser}>
          <h3>Your User ID will be {userId}</h3>
          <input
            name="name"
            placeholder="Input Your Name Here :)"
            required=""
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </form>
      </div>
      <h1 className="title">Leave A Review</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="User ID"
            required=""
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="place"
            placeholder="Place ID"
            required=""
            type="text"
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            name="review"
            placeholder="Write your review!"
            required=""
            type="text"
            onChange={(e) => setReview(e.target.value)}
          />
          <input
            name="star_rating"
            placeholder="Star Rating (1-5)"
            required=""
            type="text"
            onChange={(e) => setStar_rating(e.target.value)}
          />
          <button
            className="submit-button"
            type="submit"
            onClick={() => setButtonText('Submitted!')}
          >
            {buttonText}
          </button>
          <button
            className="submit-button"
            onClick={() => setButtonPopup(true)}
          >
            See List Of Places' IDs
          </button>
        </form>
        <PlacesPopup setTrigger={setButtonPopup} trigger={buttonPopup} />
      </div>
    </>
  )
}
