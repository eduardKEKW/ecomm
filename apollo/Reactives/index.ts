import { makeVar } from '@apollo/client';
import { LikeInterface } from 'apollo/querys/Activity.query';

export const userLikesVar = makeVar<LikeInterface[]>([])