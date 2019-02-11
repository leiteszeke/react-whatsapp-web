import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({

}))`
    background: #f8f8f8;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    display: flex;
    flex: none;
    height: 49px;
    position: relative;
    transition: box-shadow 0.18s ease-out, background-color 0.25s ease-out;
    width: 100%;
`;

export const Icon = styled.i.attrs(props => ({
    className: 'material-icons',
}))`
    align-items: center;
    color: rgba(38, 50, 56, 0.6);
    display: flex;
    font-size: 20px;
    height: 35px;
    left: 27px;
    position: absolute;
    top: 7px;
`;

export const Label = styled.label.attrs(props => ({

}))`
    background-color: #fff;
    border-radius: 18px;
    display: flex;
    height: 35px;
    margin: 7px 14px 0 12px;
    padding-left: 65px;
    padding-right: 32px;
    width: 100%;
`;

export const Input = styled.input.attrs(props => ({

}))`
    border: none;
    padding: 0;
    font-size: 12px;
    font-weight: normal;
    line-height: 20px;
    min-height: 20px;
    outline: none;
    user-select: text;
    width: 100%;
    z-index: 1;
`;