export default function Reviews() {
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
    </>
  )
}
