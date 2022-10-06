 import { useState } from 'react'
 
 function SingleReview({review}){
 const [rating, setRating] = useState(review.star_rating); 

 if (rating === 1){
    return "⭐"
 }
 else if (rating === 2){
    return "⭐⭐"
 }
else if (rating === 3){
   return "⭐⭐⭐"
}
else if (rating === 4){
   return "⭐⭐⭐⭐"
}
else if (rating === 5){
   return "⭐⭐⭐⭐⭐"
}
    
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            
            <p>Stars: <span className="span-tag">{setRating}</span></p>
        </>
    )
}
export default SingleReview