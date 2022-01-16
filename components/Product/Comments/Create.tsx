import ButtonMain from "components/buttons/Main";
import { SCreate } from "components/styled/Product/CommentCreate";
import { useRouter } from "next/router";
import Stars from "../Stars";

interface Props {
    productId: number
    border?: "top" | "bottom"
}

const Create = ({ productId, border }: Props): JSX.Element => {
    const router = useRouter();

    return (    
        <SCreate border={border} >
            <ButtonMain onClick={() => router.push(`/create/comment/${productId}`)}>
                Leave a Review
            </ButtonMain>
            <div>
                <Stars onChange={(v) => router.push(`/create/comment/${productId}`)} />
            </div>
        </SCreate>
    )
}

export default Create;