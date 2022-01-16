import { ApolloCache, DefaultContext, MutationFunctionOptions, QueryResult, useMutation, useQuery } from "@apollo/client";
import { QueryHookOptions } from "@apollo/react-hooks";
import { CommentInterface } from "apollo/fragments/Comment.fragment";
import { CommentQueryInteraface, CommentsMetaInterface, COMMENTS_QUERY, CommnetQueryVarsInterface, PaginationInterface } from 'apollo/querys/Comments.query';
import { CommentMutationInteraface, COMMENT_MUTATION, CommnetMutationVarsInterface } from '../apollo/mutations/Comment.mutator';
import { LikeDataMutationInterface, LikeMutationVarsInterface, LIKE_MUTATION } from '../apollo/mutations/Like.mutator';
import useActivity from "../hooks/useActivity";
import { userLikesVar } from "apollo/Reactives";
import { toggleArrayValue } from "helpers/helpers";
import { LikeInterface } from "apollo/querys/Activity.query";

interface Props {
    options?: QueryHookOptions<CommentQueryInteraface, CommnetQueryVarsInterface>
}

export type MutatorFunc<MutationInterface, VarsInterface> = (options?: MutationFunctionOptions<MutationInterface, VarsInterface, DefaultContext, ApolloCache<any>>) => any;

interface LocalCommentInterface extends CommentInterface {
    userLike?: boolean
    userOwned?: boolean
}

interface DataInterface extends Omit<QueryResult<CommentQueryInteraface, CommnetQueryVarsInterface>, 'data'> {
    comments: CommentInterface[]
    pageInfo: PaginationInterface
    like: MutatorFunc<LikeDataMutationInterface, LikeMutationVarsInterface>
    metaData: CommentsMetaInterface
}

const useComments = ({ options }: Props = {}): [MutatorFunc<CommentMutationInteraface, CommnetMutationVarsInterface>, DataInterface] => {
    const { } = useActivity({ 
        options: {
            variables: { productId: options?.variables?.productId },
            onCompleted: (data) => {
                userLikesVar(data.activity.likes);
            }
        }
    });
    const { data, loading, error, ...rest } = useQuery<CommentQueryInteraface, CommnetQueryVarsInterface>(COMMENTS_QUERY, {
        notifyOnNetworkStatusChange: true,
        ...options
    })

    const [mutateComments, { }] = useMutation<CommentMutationInteraface, CommnetMutationVarsInterface>(COMMENT_MUTATION);
    const [likeComment, {}] = useMutation<LikeDataMutationInterface, LikeMutationVarsInterface>(LIKE_MUTATION,{
        onCompleted: (data) => {
            userLikesVar(
                toggleArrayValue<LikeInterface>({
                    arr: userLikesVar(),
                    key: 'comment_id',
                    value: data.LikeComment.id
                })
            )
        }
    });

    return [
        mutateComments,
        {
            comments: data?.comments.hits,
            pageInfo: data?.comments.pageInfo,
            metaData: data?.comments.metaData,
            loading,
            like: likeComment,
            ...rest
        }
    ];
}

export default useComments;

