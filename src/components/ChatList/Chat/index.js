import React from 'react';
import {
    Container,
    Thumbnail,
    Image,
    ImageContainer,
    ChatData,
    ChatTop,
    ChatName,
    ChatDate,
    ChatExtract,
} from './style';
import moment from 'moment-timezone';

const Chat = (props) => {
    const {
        created_at,
        lastname,
        name,
        onClick,
        user_id,
    } = props;

    return (
        <Container onClick={ onClick }>
            <Thumbnail>
                <ImageContainer>
                    <Image source={ `https://picsum.photos/200/200?image=${ user_id }` } />
                </ImageContainer>
            </Thumbnail>
            <ChatData>
                <ChatTop>
                    <ChatName>{ name } { lastname }</ChatName>
                    <ChatDate>{ moment(created_at).format('DD/MM/YYYY') }</ChatDate>
                </ChatTop>
                <ChatExtract>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</ChatExtract>
            </ChatData>
        </Container>
    );
}

export default Chat;