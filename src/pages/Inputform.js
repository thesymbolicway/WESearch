export default function Home() {
  return (
    <>
      <h1 className="title">
        Add A <span className="new">New </span>Place
      </h1>
      <div class="form-container">
        <form>
          <input placeholder="Name" required="" type="text" />
          <span class="border"></span>
          <input name="address" required="" placeholder="Address" type="text" />
          <span class="border"></span>
          <input name="image" placeholder="Image URL" type="text" />
          <span class="border"></span>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
