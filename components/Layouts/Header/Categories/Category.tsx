import { SCategoryItem } from "components/styled/Header"
import { ID } from "hooks/useProduct"
import Link from "next/link"
import React from "react"

interface Props {
    name: string
    slug: string
    id: ID
    setViewCategory: (id: ID) => void
    selected: boolean
}

const Category = ({ name, slug, id, setViewCategory, selected }: Props) => {
    return (
        <Link href={`categories/${slug}`} key={id}>
            <SCategoryItem
                onMouseEnter={() => setViewCategory(id)}
                id={selected ? 'selected' : ''}
            >
                <span>
                    <i>{"😍"}</i>
                </span>

                <span>
                    {name}
                </span>
            </SCategoryItem>
        </Link>
    )
}

export default React.memo(Category)
