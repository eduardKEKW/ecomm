import styled from 'styled-components';

export const SCarousel = styled.div`
    grid-area: ${({ gridArea }) => gridArea};
    width: 100%;
    position: relative;

    &:hover aside section a {
        opacity: .8;
    }
`;

export const SContent = styled.div`
    overflow: ${({ isExtended }) => isExtended ? "clip" : "hidden"};
    overflow-clip-margin: 1rem;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    & > div {
        display: flex; 
        height: ${({ height }) => height};
        transform: ${({ transform }) => transform};
        transition: transform .2s ease-in-out;
        gap: ${({ gap }) => gap};

        & > div {
            &:first-child {
                /* margin-left: 1rem; */
            }  

            &:nth-child(${({ perPage }) => perPage}n) {
                /* margin-right: 0rem; */
            }

            scroll-snap-align: start;
            flex-shrink: 0;
            /* width: calc(${({ width }) => width} - (2rem / 6)); */
            width: ${({ width }) => width};
            height: ${({ height }) => height};
            position: relative;
        }
    }
`;

export const SNavigation = styled.aside`
    section:first-child {
        
        a:nth-child(1) {
            @media (max-width: 1400px) {
                left: 0%;
            }
        }

        a:nth-child(2) {
            left: ${({ navigation }) => (navigation == "outside" ? "104%" : "99%")};
            transform: translateX(-100%) translateY(-50%);
                        
            @media (max-width: 1400px) {
                left: 100%;
            }
        }

        a {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);    
            left: ${({ navigation }) => (navigation == "outside" ? "-4%" : "1%")};
            display: flex;
            justify-content: center;
            align-items: center;
            border: solid 1px ${({ theme }) => theme.colors.black};
            background: white;
            cursor: pointer;
            opacity: .3;
            transition: opacity .2s ease;
            width: 2rem;
            height: 4rem;
            box-shadow: ${({ theme }) => theme.shadows.main};

            i {
                color: ${({ theme }) => theme.colors.main};
                font-size: 1rem;
            }

            &:hover {
                opacity: 1;
            }
        }
    }

    section:last-child {
        position: absolute;
        top: ${({ navigationInside }) => navigationInside ? '95%' : '102%'};
        left: 50%;
        transform: translateX(-50%);
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            width: 1rem;
            height: 1rem;
            margin-right: .3rem;
            transition: background .2s ease;
            background: white;
            background: grey;
            cursor: pointer;
            opacity: .3;
            transition: opacity .2s ease;

            &:hover {
                opacity: 1;
            }
        }

        #selected {
            background: ${({ theme }) => theme.colors.main};
        }
    }
`;