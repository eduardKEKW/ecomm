import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react'
import { SCarousel, SContent, SNavigation } from './styled/Carousel'

interface Props {
    gridArea?: string
    children: JSX.Element
    slidesCount: number
    perPage?: number
    height?: string
    showDotsNavigation?: boolean,
    navigation?: "inside" | "outside"
}

const getCarouselNavigation = ({ slidesCount, width = 100 }): Array<string | null> => {
    return [
        null,
        ...(new Array(slidesCount).fill(0).map((_, index) => `translateX(-${index * width}%)`)),
        null
    ];
}

function Carousel({ gridArea, children, slidesCount, perPage = 1, height, showDotsNavigation = true, navigation = "inside" }: Props) {
    const gap                           = perPage == 1 ? 0 : 2;
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [width, pages]                = useMemo(() => [
        `${(100 / perPage) - (gap - (gap / perPage))}%`,
        Math.ceil(slidesCount / perPage)
    ], [slidesCount, perPage]);
    
    return (
        <SCarousel gridArea={gridArea} >
            <SContent gap={`${gap}%`}  width={width} height={height} transform={`translateX(-${(currentItem * 100) + (currentItem * gap)}%)`}  perPage={perPage} >
                <div>
                    {children}
                </div>
            </SContent>

            <SNavigation navigation={navigation}>
                <section>
                    <a
                        onClick={() => setCurrentItem(Math.max(currentItem - 1, 0))} 
                        style={{ display: currentItem ? "flex" : "none" }}
                    >
                        <i><FontAwesomeIcon icon={faArrowLeft} /></i>
                    </a>

                    <a
                        onClick={() => setCurrentItem(Math.min(currentItem + 1, pages))}
                        style={{ display: (currentItem + 1) < pages ? "flex" : "none" }}
                    >
                        <i><FontAwesomeIcon icon={faArrowRight} /></i>
                    </a>
                </section>

                <section>
                    { showDotsNavigation && 
                        new Array(pages).fill(0).map((_, index) => {
                            return (
                                <a 
                                    id={currentItem == index ? "selected" : "" } 
                                    onClick={() => setCurrentItem(index)}
                                    key={index} 
                                />
                            )
                        })
                    }
                </section>
            </SNavigation>


        </SCarousel>
    )
}

export default Carousel
