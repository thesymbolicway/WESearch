
function PlaceCard({place, handleDelete}) {
  // console.log({place});
  return (
    <li className="card" id={place.id}>
      <p className="card-name">{place.name}</p>
      <p className="card-category"><span>{place.category}</span></p>
      <div className="card-image-container">
        <img className="card-image" src={place.image_url} alt={place.name} />
      </div>
      <div className="details">
        <p>Average Price Per Guest: <span>{place.price}$</span></p>
        <p> Address: <span>{place.location}</span></p>
        <p> Reviews: </p>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default PlaceCard;