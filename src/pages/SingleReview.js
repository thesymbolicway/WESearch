 export default function SingleReview({review}){
    return (
        <>
            <p>"{review.review}" - <span className="span-tag">{review.user.name}</span> </p>
            <p>Stars: <span className="span-tag">{review.star_rating}</span></p>
        </>
    )
}