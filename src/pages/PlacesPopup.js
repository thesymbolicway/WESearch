import '../css/popup.css'
import { useState, useEffect } from 'react';
import PlaceList from './PlaceList'

export default function PlacesPopup(props){
    const [ listPlaces, setListPlaces ] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/places')
          .then((res) => res.json())
          .then((data) => setListPlaces(data))
      }, [])

    return props.trigger ? (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn-pop"onClick={() => props.setTrigger(false)}>Close</button>
            <h2 className="place-title-pop">
                List Of All Places With Their Respected Id's
            </h2>
            <div className="popup-list-container">

            {listPlaces.map((list) => {
            return (
              <PlaceList
                key={list.id}
                list={list}
              />
            )
          })}
            </div>
            
          </div>
        </div>
      ) : (
        ''
      )
    }