import { SDetails, SDetailsItem, SProgress, SReviews, STotal } from "components/styled/Product/Reviews";
import produce from "immer";
import React from "react";
import { useMemo } from "react";
import Stars from "../Stars";

interface Props {
    avgRating?: number
    ratingsCount?: RatingsMap[] | []
    reviewCount?: number
}

interface RatingsMap { 
    count?: number,
    rating?: number
}

const Reviews = ({
    avgRating = 0,
    ratingsCount = [],
    reviewCount = 0,
}: Props): JSX.Element => {
    const ratingsMap = useMemo(() => getRatingsMap(ratingsCount), [ratingsCount, reviewCount]);

    return (    
        <SReviews>
            <STotal>
                <div>
                    <span>{avgRating?.toFixed(2)}</span>
                    <span><Stars rating={+avgRating?.toFixed(1)} /></span>
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

const getRatingsMap = (data: RatingsMap[]): any => {
    return data.reduce((acc, { rating, count }) => {
        return produce(acc, (accDraft) => {
            accDraft[rating] = count
        })
    }, {});
}

export default React.memo(Reviews);