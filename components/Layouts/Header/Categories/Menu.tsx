import React from "react";
import { SMenu } from 'components/styled/Header';
import Link from "components/helpers/LinkCustom";
import { CategoryType } from "hooks/useCategories.hook";

interface Props {
    category: CategoryType
}

function Menu({ category }: Props) {
    return (
        <SMenu>
            <ul>
                {
                    category?.children && category.children.map(({
                        children,
                        name,
                        path,
                        id
                    }) => {
                        return (
                            <li key={id} id={`row-${children.length + 1}`}>
                                <Link href={path}><span>{name}</span></Link>

                                <ul>
                                    {
                                        children && children.map(({ name, id, path }) => (
                                            <Link href={path} key={id}>
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
        </SMenu>
    )
}

export default Menu
