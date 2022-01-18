import { SAbout, SAvatar, SBody, SComment, SDate, SInfo, SName, SRating, SText, STitle } from 'components/styled/Product/Comments';
import Image from 'next/image';
import defaultAvatar from '/public/avatar.png';
import React, { useMemo } from 'react'
import { getInitials, getStarTitle, randomColor } from 'helpers/helpers';
import Stars from '../Stars';
import Like from './Like';
import { CommentInterface } from 'apollo/fragments/Comment.fragment';
import { MutationFunctionOptions, DefaultContext, ApolloCache } from '@apollo/react-hooks';
import { LikeDataMutationInterface, LikeMutationVarsInterface } from 'apollo/mutations/Like.mutator';

interface Props {
    comment: CommentInterface,
    like:  (options?: MutationFunctionOptions<LikeDataMutationInterface, LikeMutationVarsInterface, DefaultContext, ApolloCache<any>>) => Promise<any>
    index: number
}

const Comment = ({ comment, like, index }: Props) => {
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
                    <Image src={defaultAvatar} layout="responsive" objectFit="cover" />
                    <div style={{ background: avatarColor }} >
                        <span>{getInitials(comment.user.name)}</span>
                    </div>
                </SAvatar>

                <SInfo>
                    <SName>
                        {comment.user.name}
                    </SName>
                    
                    <SDate>
                        {comment.created_at}
                    </SDate>
                </SInfo>
            </SAbout>
            
            <SBody>
                <STitle>
                    {getStarTitle(comment.rating)}
                </STitle>

                <SRating>
                    <Stars rating={comment.rating} />
                </SRating>

                <SText>
                    {comment.body}
                </SText>
            </SBody>

            <Like onLike={onLike} likes={comment.likes} userLike={comment.userLike} />
        </SComment>
    )
}

export default Comment