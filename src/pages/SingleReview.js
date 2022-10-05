 export default function SingleReview({review}){
    return (
        <>
            <p>"{review.review}" - {review.user.name} </p>
            <p>Stars: {review.star_rating}</p>
        </>
    )
}