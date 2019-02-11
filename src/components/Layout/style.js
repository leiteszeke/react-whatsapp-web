import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({

}))`
    display: flex;
`;

export const HeaderContainer = styled.div.attrs(props => ({

}))`
    align-items: center;
    display: flex;
    flex-grow: 1;

    &:last-of-type {
        justify-content: flex-end;
    }
`;

export const Header = styled.header.attrs(props => ({

}))`
    background-color: #eeeeee;
    display: flex;
    padding: 10px 16px;
`;

export const Aside = styled.aside.attrs(props => ({

}))`
    background: #FFFFFF;
    display: inline-block;
    height: 100%;
    width: 332px;
`;

export const Thumbnail = styled.div.attrs(props => ({

}))`
    border-radius: 20px;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    overflow: hidden;
    width: 40px;
`;

export const Image = styled.img.attrs(props => ({
    src: props.source,
}))`
    cursor: pointer;
    height: 100%;
    width: 100%;
`;

export const Icon = styled.i.attrs(props => ({
    className: 'material-icons',
}))`
    color: rgba(38, 50, 56, 0.6);
    cursor: pointer;
    padding: 8px;
`;

export const Chats = styled.div.attrs(props => ({

}))`
    box-sizing: border-box;
    height: calc(100% - 60px);
    overflow: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
`;

export const Content = styled.div.attrs(props => ({

}))`
    display: inline-block;
    height: 100%;
    width: calc(100% - 332px);
`;