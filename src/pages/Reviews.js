export default function Reviews() {
  return (
    <>
      <h1 className="title">Reviews</h1>
      <input type="text" placeholder="Search.."></input>
      <select className="dropdown" name="places" id="places">
        <option value="restaurant">Restaurant</option>
        <option value="auto">Auto</option>
        <option value="entertainment">Entertainment</option>
        <option value="venue">Venue</option>
      </select>
    </>
  )
}
