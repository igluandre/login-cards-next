import styled from "styled-components";

export const CardCompany = styled.li`
    list-style: none;
    border-radius: 8px;
    text-align: center;
    padding: 0.8rem 1rem;
    width: 280px;
    flex-grow: 1;
    flex-basis: 12%;
    cursor: pointer;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    border: ${props => props.$isDragged  ? '#000 dashed 2px' : ''};
    opacity: ${props => props.$isDragged  ? '0.7' : ''};  

    &:nth-child(2n) {
        background-color: rgb(1, 206, 1);
    }

    &:nth-child(2n + 1) {
        background-color: rgb(213, 6, 6);
    }

    &:nth-child(1) {
        background-color: yellow;
    }
`;


export const Strong = styled.strong`
    font-size: 13px;

    @media (max-width: 767.98px) {
        font-size: 12px;
    }

`
export const Paragraph = styled.p`
    margin: 0.3rem 0px 1rem 0px;
    font-size: 14px;

    @media (max-width: 767.98px) {
        margin: 0.3rem 0px 1rem 0px;
        font-size: 11px;
    }
`