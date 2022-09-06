import styled from 'styled-components';

// export const SSsearchContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex: 5;
//     z-index: 999;
//     font-weight: 200;
//     position: relative;

//     &__button_search {
//         top: 0%;
//         left: 0%;
//         position: absolute;
//         width: 2.5rem;
//         height: 100%;
//         color: $white;
//         background: ${({ theme }) => theme.colors.red};
//         outline: 0;
//         font-size: 1rem;
//         cursor: pointer;
//         z-index: 999;
//         transition: color .25s;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border: solid 1px #2d3b3e;
//         border-right: none;

//         &:hover {
//             // color: $colorBlack
//         }
//     }
    
//     &__search_selected {
//         border: none;
//         border-top: solid 2px ${({ theme }) => theme.colors.black};
//         border-left: solid 2px ${({ theme }) => theme.colors.black};
//     }

//     &__button_erase {
//         @include flex-center;
//         left: 100%;
//         position: absolute;
//         background-color: transparent;
//         border: none;
//         outline: 0;
//         font-size: 1rem;
//         cursor: pointer;
//         z-index: 99;
//         transition: color .25s;
//         opacity: 0;
//         color: ${({ theme }) => theme.colors.black};
        
//         &:hover {
//             color: ${({ theme }) => theme.colors.black};
//         }
//     }

//     &__suggestions {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         width: 100%;
//         overflow: visible;
//         position: absolute;
//         top: 100%;
//         color: ${({ theme }) => theme.colors.black};
//         background-color: $white;
//         box-shadow: ${({ theme }) => theme.shadows.main};
//         border: solid 2px ${({ theme }) => theme.colors.black};
//         border-top: none;

//         &:after {
//             content: "";
//             position: absolute;
//             top: .4rem;
//             left: .4rem;
//             width: 100%;
//             height: calc(100% + 2.5rem);
//             transform: translateY(-2.5rem);
//             background: $white;
//             border: solid 2px ${({ theme }) => theme.colors.black};
//             z-index: -1;
//         }
    
//         &:before {
//             content: "";
//             position: absolute;
//             top: .7rem;
//             left: .7rem;
//             width: 100%;
//             height: calc(100% + 2.5rem);
//             transform: translateY(-2.5rem);
//             background: $white;
//             border: solid 2px ${({ theme }) => theme.colors.black};
//             z-index: -1;
//         }

//         &_separator {
//             height: .1rem;
//             display: block;
//             position: absolute;
//             top: 0px;
//             padding: 0rem 1rem;

//             div {
//                 border-top: 1px solid ${({ theme }) => theme.colors.grey};
//             }
//         }

//         &_items {
//             width: 100%;
//         }
        
//         &_item {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-weight: 400;
//             position: relative;
//             padding: 1rem .5rem;
//             transition: background .3 ease-in;
//             border-bottom: 1px solid rgba(128, 128, 128, 0.13);
    
//             &_category {
//                 /* @include ribbone; */
//                 margin-bottom: .5rem;
//                 width: calc(100% + .65rem);
//                 padding: .2rem 1rem;
//                 transform: translateX(-.65rem);
//                 text-align: left;
//                 font-size: 1rem;
//                 background: ${({ theme }) => theme.colors.main};
//                 box-shadow: ${({ theme }) => theme.shadows.main};
//                 color: $white;

//                 &:hover {
//                     text-decoration: underline;
//                 }
//             }

//             &:last-child {
//                 border-bottom: none;
//             }
    
//             &:hover {
//                 text-decoration: underline;
//             }
//         }
    
//         &_item_img {
//             flex: 1;
//         }
    
//         &_item_name {
//             flex: 3;
//             align-self: stretch;
//             padding: 0 0rem .5rem 1.5rem;
//             word-break: break-all;
//         }
    
//         &_item_price {
//             flex: 1;
//             align-self: stretch;
//         }
    
//         &_hide {
//             opacity: 0;
//             pointer-events: none;
//         }
//     }

//     &__more {
//         margin-bottom: 1rem;
//     }

//     &__wrapper {
//         position: absolute;
//         top: 0rem;
//         left: 0rem;
//         width: 100vw;
//         height: 100%;
//         background-color: rgba(0, 0, 0, 0.226);
//         z-index: 99;
//     }
// `

// export const SSuggestionInput = styled.div`

// ` {
//     min-width: 100%;
//     border: solid 1px #2d3b3e;
//     padding: .7rem 3rem .7rem;
//     height: 2.5rem;
//     outline: 0;
//     font-size: 1rem;
//     color: black;
//     font-weight: 200;
//     position: relative;
//     font-weight: 200;
//     overflow: hidden;
//     box-shadow: $shadowBtn;

//     &::placeholder {
//         color: #2d3b3e;
//         font-size: .9rem;
//     }

//     &:focus {
//         box-shadow: ${({ theme }) => theme.shadows.main};
//     }

//     &_on_search {
//         border: solid 2px ${({ theme }) => theme.colors.black};
//         border-bottom: none;
        
//         &:focus {
//             border-bottom: none;
//         }
//     }
// }

// export const SHide = styled.div`
//     width: 0%;
//     overflow: hidden;
//     border: none;
// `