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

    useEffect(() => setLiked(userLike), [userLike])


    useEffect(() => {
        setTranslate(0)
    }, [likes])

    const likeComment = () => { 
        if(isGuest) return;

        setLiked(v => !v);
        setTranslate(v => liked ? v - 1 : v + 1);
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
                        <span>{likes + 1}</span>
                        <span>{likes}</span>
                        <span>{likes - 1}</span>    
                    </div>        
                </SIncrement>
            </div>
        </SLike>
    )
}

export default Like;