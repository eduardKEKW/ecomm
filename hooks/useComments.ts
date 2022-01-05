import { ApolloCache, DefaultContext, MutationFunctionOptions, QueryResult, useMutation, useQuery } from "@apollo/client";
import { QueryHookOptions } from "@apollo/react-hooks";
import { CommentInterface } from "apollo/fragments/Comment.fragment";
import { CommentQueryInteraface, CommentsMetaInterface, COMMENTS_QUERY, CommnetQueryVarsInterface, PaginationInterface } from 'apollo/querys/Comments.query';
import { CommentMutationInteraface, COMMENT_MUTATION, CommnetMutationVarsInterface } from '../apollo/mutations/Comment.mutator';
import { LikeMutationInterface, LikeMutationVarsInterface, LIKE_MUTATION } from '../apollo/mutations/Like.mutator';

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
    like: MutatorFunc<LikeMutationInterface, LikeMutationVarsInterface>
    metaData: CommentsMetaInterface
}

const useComments = ({ options }: Props = {}): [MutatorFunc<CommentMutationInteraface, CommnetMutationVarsInterface>, DataInterface] => {

    const { data, loading, ...rest } = useQuery<CommentQueryInteraface, CommnetQueryVarsInterface>(COMMENTS_QUERY, options);
    
    const [likeComment, {}]                                         = useMutation<LikeMutationInterface, LikeMutationVarsInterface>(LIKE_MUTATION);
    const [mutateComments, { loading: loadingCommentsMutator }]     = useMutation<CommentMutationInteraface, CommnetMutationVarsInterface>(COMMENT_MUTATION, {
        notifyOnNetworkStatusChange: true,
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
