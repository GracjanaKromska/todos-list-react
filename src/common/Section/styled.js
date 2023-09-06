import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1000px;
    margin: 10px auto;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5 px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    max-width: 1000px;
    margin: 20px auto;
`;

export const Body = styled.div`
    padding: 20px;
`;