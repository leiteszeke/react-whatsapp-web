import styled from 'styled-components';

export const Header = styled.div.attrs(props => ({

}))`
    align-items: center;
    background-color: #eeeeee;
    border-left: 1px solid #e0e0e0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    position: relative;

    &:after {
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        bottom: 0;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`;

export const Thumbnail = styled.div.attrs(props => ({

}))`
    border-radius: 20px;
    display: inline-block;
    height: 40px;
    margin-right: 15px;
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

export const Body = styled.div.attrs(props => ({

}))`
    background: url('/bg.jpg') repeat repeat;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    height: calc(100% - 122px);
    overflow: auto;
    width: 100%;
`;

export const Footer = styled.footer.attrs(props => ({

}))`
    background-color: #efefef;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    display: flex;
    height: 62px;
    padding: 5px 10px;
    width: 100%;

    i {
        color: rgba(38, 50, 56, 0.45);
    }
`;

export const EmojiButton = styled.div.attrs(props => ({

}))`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    min-height: 52px;
    padding: 5px 10px;
    will-change: width;
`;

export const Input = styled.input.attrs(props => ({
    placeholder: props.placeholder,
}))`
    background-color: #ffffff;
    border-color: #fff;
    border-radius: 21px;
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex: 1;
    margin: 5px 10px;
    outline: none;
    padding: 9px 12px 11px 12px;
`;

export const MetaData = styled.div.attrs(props => ({

}))`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const UserName = styled.div.attrs(props => ({

}))`
    width: 100%;
`;

export const UserConnection = styled.div.attrs(props => ({

}))`
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
    line-height: 20px;
    min-height: 20px;
    width: 100%;
`;