import useCategory from "hooks/useCategory.hook";
import React from "react";
import { SMenu } from 'components/styled/Header';
import Loading from "components/helpers/Loading";
import Link from "components/helpers/LinkCustom";

interface Props {
    category: number
}

function Menu({ category }: Props) {
    const { categories, loading } = useCategory({
        variables: {
            includeChildren: true,
            parent: +category
        }
    });

    return (
        <SMenu>
            <Loading loading={loading}>
                <ul>
                    {
                        categories && categories.map(({
                            children,
                            name,
                            slug,
                            id
                        }) => {
                            return (
                                <li key={id} id={`row-${children.length + 1}`}>
                                    <Link href={`categories/${slug}`}><span>{name}</span></Link>

                                    <ul>
                                        {
                                            children && children.map(({ name, id, slug }) => (
                                                <Link href={`categories/${slug}`} key={id}>
                                                    <li>{name}</li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </Loading>
        </SMenu>
    )
}

export default Menu
