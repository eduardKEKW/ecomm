import React from 'react'
import styles from 'styles/components/price.module.scss';

interface Props {
    price: number
    discount?: number
    simple?: boolean
    showDiscount?: boolean
    color?: string
    style?: React.CSSProperties
    showTva?: boolean
    specialPrice?: string | number
}

const Price = ({ 
        price,
        specialPrice = 0,
        discount,
        color,
        style,
        showTva = false,
        showDiscount = true
    }: Props) => {
    let discountedPrice    = discount ? (price - ((discount/100) * price)).toFixed(2) : Number.parseFloat(specialPrice as string).toFixed(2);
    let initialPrice       = price?.toFixed(2);
    
    let [speacialPriceFormat, specialPriceDec]  = formatPrice(discountedPrice);
    let [initialPriceFormat, initialPriceDec]   = formatPrice(initialPrice);
   
    if(! discount && ! specialPrice) {
        [speacialPriceFormat, specialPriceDec] = [initialPriceFormat, initialPriceDec];
    }

    return (    
        <div className={styles.price} style={style}>
           <div 
                style={{ 
                    color: color || (discount || specialPrice ? "rgb(255, 89, 89)" : "#70cadf")
                }}
                className={styles.price__last}
           >
               <div 
                    data-after-content={specialPriceDec}
                    className={styles.price__round}
                >
                    {speacialPriceFormat}
               </div>
               <span>RON</span>
           </div>

           {
                !! showDiscount && !! (discount || specialPrice) &&
                    (
                        <div 
                            className={`${styles.price__last} ${styles.price__old}`}
                            style={{ 
                                color: color
                            }}
                        >
                            <div 
                                    // data-after-content={initialPriceDec}
                                    className={styles.price__round}
                                >
                                    {initialPriceFormat}
                            </div>
                            <span>RON</span>
                        </div>
                    )
           }

            {
                showTva && (
                    <div className={styles.price__tva}>
                        ( VAT included )
                    </div>
                )
            }
        </div>
    )
}

const formatPrice = (price: number | string = 0): string[] => {
    const dec: string = price.toString().split('.').slice(-1)[0];
    const formatPrice: string = price.toString().split('.').slice(0, -1).join('.');

    return [formatPrice, dec];
}

export default Price
