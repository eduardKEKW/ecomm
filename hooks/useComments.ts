import useActivity from "../hooks/useActivity";
import { userLikesVar } from "apollo/Reactives";
import { toggleArrayValue } from "helpers/helpers";
import { ReviewsInfoQueryHookResult, ReviewsListQuery, ReviewsOrder, useLikeReviewMutation, useReviewsInfoLazyQuery, useReviewsInfoQuery, useReviewsListLazyQuery, useReviewsListQuery } from '../Graphql/generated/graphql'
import { ListInterface } from "components/helpers/Resource";

export const commentsFiltersOptions: ListInterface[] = [
    {name: 'All', value: 'null', selected: true},
    {name: '1 Stars', value: '1'},
    {name: '2 Stars', value: '2'},
    {name: '3 Stars', value: '3'},
    {name: '4 Stars', value: '4'},
    {name: '5 Stars', value: '5'},
];

export const commentsSortingOptions: ListInterface[] = [
    {name: 'Popular', value: ReviewsOrder.Popular, selected: true},
    {name: 'Newset', value: ReviewsOrder.Newest},
];

export const commentsPerPageOptions: ListInterface[] = [
    {name: '3', value: '3', selected: true},
    {name: '6', value: '6'},
    {name: '9', value: '9'}
];

export type OptionsType = Parameters<typeof useReviewsListLazyQuery>[0];

interface Props {
    options?: OptionsType
}

export type ReviewsType  = ReviewsListQuery['reviewsList']['data'];
export type PageInfoType = ReviewsListQuery['reviewsList']['paginatorInfo'];
export type ReviewsInfoType = ReviewsInfoQueryHookResult['data'];

interface DataInterface extends Omit<ReturnType<typeof useReviewsListQuery>, 'data'> {
    comments: ReviewsType
    pageInfo: PageInfoType
    reviewsInfo: ReviewsInfoType
}

const useComments = ({ options }: Props = {}): [typeof getReviews, DataInterface & { like: typeof likeComment }] => {
    const { } = useActivity({ 
        options: {
            variables: {
                input: {
                    productId: options.variables.productId
                }
            },
            onCompleted: (data) => {
                userLikesVar(data.userActivity.commentLikes);
            }
        }
    });
    const { data: reviewsInfo } = useReviewsInfoQuery({
        variables: {
            productId: options.variables.productId
        }
    });
    const [getReviews, { data, loading, error, ...rest }] = useReviewsListLazyQuery({
        notifyOnNetworkStatusChange: true,
        ...options
    })

    const [likeComment, {}]     = useLikeReviewMutation({
        onCompleted: (data) => {
            userLikesVar(   
                toggleArrayValue({
                    arr: userLikesVar(),
                    key: "reviewId",
                    value: +data.LikeReview.review.id,
                    create: {
                        reviewId: +data.LikeReview.review.id,
                    }
                })
            )
        }
    });

    return [
        getReviews,
        {
            comments: data?.reviewsList.data,
            pageInfo: data?.reviewsList.paginatorInfo,
            reviewsInfo: reviewsInfo,
            loading,
            like: likeComment,
            ...rest
        }
    ];
}

export default useComments;

