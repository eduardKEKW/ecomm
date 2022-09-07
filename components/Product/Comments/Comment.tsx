import { SAbout, SAvatar, SBody, SComment, SDate, SInfo, SName, SRating, SText, STitle } from 'components/styled/Product/Comments';
import Image from 'next/image';
import defaultAvatar from '/public/avatar.png';
import React, { useMemo } from 'react'
import { getStarTitle, randomColor } from 'helpers/helpers';
import Stars from '../Stars';
import { ReviewsType } from 'hooks/useComments';
import { useLikeReviewMutation } from '../../../Graphql/generated/graphql';
import Like from './Like';

interface Props {
    comment: ReviewsType[0],
    like:  ReturnType<typeof useLikeReviewMutation>[0]
    index: number
    isGuest: boolean
}
    
const Comment = ({ comment, like, index, isGuest }: Props) => {
    const avatarColor = useMemo<string>(() => randomColor(), []);

    const onLike = () => {
        like({
            variables: {
                commentId: comment.id
            }
        })
    }

    return (
        <SComment animationDelay={index}>
            <SAbout>
                <SAvatar style={{ color: avatarColor }} >
                    <Image src={defaultAvatar} layout="responsive" objectFit="cover" alt='avatar_default' />
                    <div style={{ background: avatarColor }} >
                        <span>{comment.initials}</span>
                    </div>
                </SAvatar>

                <SInfo>
                    <SName>
                        {comment.customerName}
                    </SName>
                    
                    <SDate>
                        {comment.createdAt}
                    </SDate>
                </SInfo>
            </SAbout>
            
            <SBody>
                <div>
                    <STitle>
                        {getStarTitle(comment.rating)}
                    </STitle>

                    <SRating>
                        <Stars rating={comment.rating} />
                    </SRating>
                </div>

                <SText>
                    {comment.comment}
                </SText>
            </SBody>

            <Like isGuest={isGuest} onLike={onLike} likes={comment.likes} userLike={comment.userLike} />
        </SComment>
    )
}

export default Comment