import { CommentsMetaInterface, RatingsInterface } from "apollo/querys/Comments.query";
import { SDetails, SDetailsItem, SProgress, SReviews, STotal } from "components/styled/Product/Reviews";
import { useMemo } from "react";
import Stars from "../Stars";

interface Props extends CommentsMetaInterface {

}

const Reviews = ({
    avgRating,
    ratingsCount,
    reviewCount,
}: Props): JSX.Element => {
    const ratingsMap = useMemo(() => getRatingsMap(ratingsCount), []);

    return (
        <SReviews>
            <STotal>
                <div>
                    <span>{avgRating.toFixed(2)}</span>
                    <span><Stars rating={+avgRating.toFixed(1)} /></span>
                    <span>{reviewCount} total reviews</span>
                </div>
            </STotal>
            <SDetails>  
                {
                    new Array(5).fill(0).map((_, i) => {
                        const stars = (i - 5) * -1;
                        const count = ratingsMap[stars] || 0;
                        const progress = ! count ? 0 : count / reviewCount * 100;

                        return (
                            <SDetailsItem key={i}>
                                <span>{stars} Stars</span>
                                <SProgress progress={progress} count={count} color={reviewsColors[i]} />
                                <span>{count} Ratings</span>
                            </SDetailsItem>
                        )
                    })
                }
            </SDetails>
        </SReviews>
    )
}

const reviewsColors = ['#03f710','#34ca39' ,'#ffc400', '#ff9900', '#f00d0d'];

const getRatingsMap = (data: RatingsInterface[]): {[key: number]: number} => {
    return data.reduce((acc, { amount, stars }) => {
        return {
            ...acc,
            [stars]: amount
        }
    }, {});
}

export default Reviews;