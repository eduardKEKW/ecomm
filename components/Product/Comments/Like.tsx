import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SIncrement, SLike } from "components/styled/Product/Comments";
import { useState, useEffect } from "react";

interface Props {
    onLike: () => void
    userLike: boolean
    likes: number
    isGuest: boolean
}

const Like = ({ onLike, userLike, likes, isGuest}: Props): JSX.Element => {
    const [liked, setLiked]         = useState<boolean>(userLike)
    const [translate, setTranslate] = useState<number>(0)
    const [totalLikes, _]           = useState<number>(likes)

    useEffect(() => setLiked(userLike), [userLike])

    const likeComment = () => { 
        if(isGuest) return;
        const isUserLike = ! liked;
        setLiked(isUserLike);
        setTranslate(isUserLike ? 1 : translate === 0 ? -1 : 0);
        onLike();
    }

    return (            
        <SLike onClick={() => likeComment()} liked={liked} isGuest={isGuest} >
            <div>
                <i> 
                    <FontAwesomeIcon icon={liked ? faThumbsUpSolid : faThumbsUp} /> 
                </i>
                <SIncrement translate={translate}>
                    <div>
                        <span>{totalLikes + 1}</span>
                        <span>{totalLikes}</span>
                        <span>{Math.max(0, totalLikes - 1)}</span>    
                    </div>        
                </SIncrement>
            </div>
        </SLike>
    )
}

export default Like;