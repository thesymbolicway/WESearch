 import { useState } from 'react'
 
 function SingleReview({review}){
//  const [rating, setRating] = useState(""); 

 if (review.star_rating === 1){
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">⭐</span></p>
        </>
    )
 }
 else if (review.star_rating === 2){
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">⭐⭐</span></p>
        </>
    )
 }
 else if (review.star_rating === 3){
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">⭐⭐⭐</span></p>
        </>
    )
}
else if (review.star_rating === 4){
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">⭐⭐⭐⭐</span></p>
        </>
    )
    }
else if (review.star_rating === 5){
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">⭐⭐⭐⭐⭐</span></p>
        </>
    )
}

    
   return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">{review.star_rating}</span></p>
        </>
    )
}
export default SingleReview