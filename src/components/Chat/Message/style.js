import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
    className: props.classes,
}))`
    display: flex;
    margin-bottom: 2px;
    margin-left: 5.5%;
    margin-right: 5.5%;

    &.user {
        justify-content: flex-end;
    }

    &.swap {
        margin-top: 12px;
    }
`;

export const Wrapper = styled.div.attrs(props => ({
    className: props.classes,
}))`
    background: #FFFFFF;
    border-radius: 7.5px;
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
    max-width: 95%;

    &.user {
        background: #dcf8c6;
    }
`;

export const Text = styled.p.attrs(props => ({

}))`
    font-size: 12px;
    margin: 0;
    padding: 6px 7px 8px 9px;
    white-space: pre-wrap;
    word-wrap: break-word
`;