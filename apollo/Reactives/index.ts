import { makeVar } from '@apollo/client';
import { CommentLike } from 'Graphql/generated/graphql';

export const userLikesVar = makeVar<CommentLike[]>([]);