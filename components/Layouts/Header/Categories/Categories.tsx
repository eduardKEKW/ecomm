import React, { useCallback, useState } from 'react'
import { SCategories } from 'components/styled/Header';
import Loading from 'components/helpers/Loading';
import Menu from './Menu';
import styles from 'styles/components/header.module.scss';
import useCategories, { CategoryType } from 'hooks/useCategories.hook';
import Category from './Category';
import { ID } from 'hooks/useProduct';

interface Props {
    children?: JSX.Element
    show: boolean
    setMenuHover: (v: boolean) => void
}

export const initialCategoriesLoad: Parameters<typeof useCategories>[0] = {
    variables: {
        input: {
            parent: null,
            position: 1
        }
    }
  }

const Categories = ({ children, show = false, setMenuHover }: Props) => {
    const [selectedCategory, setSelectedCategory]   = useState<CategoryType|null>(null);
    const {categories, loading}                     = useCategories(initialCategoriesLoad);  

    const viewCategory = useCallback((id: ID) => {
        setSelectedCategory(categories?.find(c => c.id === id));
    }, [categories]);

    if(! show) return <>{children}</>

    return (
        <>
            {children}  

            <div
                style={{ zIndex: 9999 }}
                onMouseEnter={() => setMenuHover(true)}
                onMouseLeave={() => setMenuHover(false)}
                className={styles.menu_slide}
            >
                <SCategories selectedCategory={selectedCategory} show={show}>
                        <ul>
                            <Loading loading={loading}>
                                <>
                                    {
                                        categories?.map(category => {
                                            return (
                                                <Category 
                                                    key={category.id}
                                                    id={category.id}
                                                    selected={selectedCategory?.id === category.id}
                                                    name={category.name} 
                                                    slug={category.slug} 
                                                    setViewCategory={viewCategory} />
                                            )
                                        })
                                    }
                                </>
                            </Loading>
                        </ul> 

                        { !!  selectedCategory && <Menu category={selectedCategory} />}
                    </SCategories>
            </div>
    
        </>
    )
}

export default Categories
