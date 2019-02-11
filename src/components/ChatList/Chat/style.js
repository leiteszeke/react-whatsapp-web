import styled from 'styled-components';

export const Thumbnail = styled.div.attrs(props => ({

}))`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 72px;
    justify-content: center;
    width: 72px;
`;

export const ImageContainer = styled.div.attrs(props => ({

}))`
    height: 50px;
    width: 50px;
`;

export const Image = styled.img.attrs(props => ({
    src: props.source,
}))`
    cursor: pointer;
    border-radius: 50%;
    height: auto;
    width: 100%;
`;

export const Container = styled.article.attrs(props => ({

}))`
    align-items: center;
    display: flex;
    height: 72px;
    width: 100%;

    &:hover {
        background: #f4f5f5;
        cursor: pointer;
    }
`;

export const ChatData = styled.div.attrs(props => ({

}))`
    border-top: 1px solid #f2f2f2;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    justify-content: center;
    padding-right: 15px;
    width: calc(100% - 78px);

    ${ Container }:first-of-type & {
        border-top: 0;
    }
`;

export const ChatTop = styled.div.attrs(props => ({

}))`
    align-items: center;
    display: flex;
    line-height: normal;
    text-align: left;
`;

export const ChatName = styled.span.attrs(props => ({

}))`
    color: #000000;
    display: flex;
    flex-grow: 1;
    font-weight: normal;
    line-height: 21px;
    overflow: hidden;
    text-align: left;
`;

export const ChatDate = styled.span.attrs(props => ({

}))`
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    line-height: 14px;
    margin-left: 6px;
    margin-top: 3px;
    max-width: 100%;
    overflow: hidden;
`;

export const ChatExtract = styled.p.attrs(props => ({

}))`
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin: 0;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    word-break: break-all;
`;