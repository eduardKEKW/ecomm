import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    flex: 1;
`;