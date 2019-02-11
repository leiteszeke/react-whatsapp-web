import React from 'react';
import {
    Header,
    Thumbnail,
    Image,
    Body,
    Input,
    Icon,
    Footer,
    EmojiButton,
    MetaData,
    UserName,
    UserConnection,
} from './style';
import Message from './Message';

const Chat = (props) => {
    const {
        messages,
        user: {
            id,
            lastname,
            name,
        } = {},
    } = props;

    if (typeof messages === 'undefined') {
        return '';
    }

    return (
        <React.Fragment>
            <Header>
                <Thumbnail>
                    <Image source={ `https://picsum.photos/250/250?image=${ id }` } />
                </Thumbnail>
                <MetaData>
                    <UserName>{ name } { lastname }</UserName>
                    <UserConnection>últ. vez hoy a las 17:31</UserConnection>
                </MetaData>
                <Icon>more_vert</Icon>
            </Header>
            <Body>
                { typeof messages !== 'undefined' && messages.map((message, index) =>
                    <Message
                        key={ message.id }
                        swap={ typeof messages[index - 1] !== 'undefined'
                            ? messages[index - 1].user_id !== message.user_id
                            : false
                        }
                        { ...message }
                    />
                )}
            </Body>
            <Footer>
                <EmojiButton>
                    <Icon>sentiment_satisfied_alt</Icon>
                </EmojiButton>
                <Input placeholder="Escribe un mensaje aquí" />
                <EmojiButton>
                    <Icon>send</Icon>
                </EmojiButton>
            </Footer>
        </React.Fragment>
    );
}

export default Chat;