import { gql } from '@apollo/client';
import { CommentInterface } from 'apollo/fragments/Comment.fragment';

export interface LikeInterface {
    id?: number
    comment_id: number
}

export interface ActivityInterface {
    likes: LikeInterface[]
    comment: Pick<CommentInterface, "id"> | null;
}

export interface ActivityDataInterface {
    activity: ActivityInterface
}

export interface ActivityQueryVars {
    productId: number
}

const ACTIVITY_QUERY = gql`
    query activity($productId: ID) @connection(key: "activity", filter: ["productId"]) {
        activity(productId: $productId){
            likes {
                id
                comment_id
            }
            comment {
                id
            }
        }
    }
`;
  
export {
    ACTIVITY_QUERY
}

