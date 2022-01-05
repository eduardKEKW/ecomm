import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCategory from 'hooks/useCategory.hook';
import React, { useState } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SCategories } from 'components/styled/Header';
import Loading from 'components/helpers/Loading';
import Menu from './Menu';
import Link from 'components/helpers/LinkCustom';

interface Props {
    children?: JSX.Element
    show: boolean
    setMenuHover: any
}

const Categories = ({ children, show = false, setMenuHover }: Props) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const { categories, loading } = useCategory({
        variables: {
            parent: null
        }
    });  

    if(! show) return <>{children}</>

    return (
        <>
            {children}

            <div
                onMouseEnter={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
            >
                <SCategories>
                        <ul>
                            <Loading loading={loading}>
                                <>
                                    {
                                        categories.map(({ name, id, slug }) => {
                                            return (
                                                <Link href={`categories/${slug}`} key={id}>
                                                    <li
                                                        onMouseEnter={() => setSelectedCategoryId(id)}
                                                        id={(id === selectedCategoryId) ? 'selected' : ''}
                                                    >
                                                        <span>
                                                            {name}
                                                        </span>

                                                        <span>
                                                            <i><FontAwesomeIcon icon={faArrowRight} /></i>
                                                        </span>
                                                    </li>
                                                </Link>
                                            )
                                        })
                                    }
                                </>
                            </Loading>
                        </ul> 

                        {!! selectedCategoryId && <Menu category={selectedCategoryId} />}
                    </SCategories>
            </div>
    
        </>
    )
}

export default Categories
