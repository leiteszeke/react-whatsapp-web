import React from 'react';
import Chat from './Chat';
import Search from './Search';
import {
    Container,
} from './style';

const ChatList = (props) => {
    const {
        chats,
        onClick,
    } = props;

    const handleClick = chatId => () => {
        if (typeof onClick === 'function') {
            onClick(chatId);
        }
    }

    return (
        <React.Fragment>
            <Search />
            <Container>
                { chats.map(chat =>
                    <Chat
                        key={ chat.id }
                        onClick={ handleClick(chat.id) }
                        { ...chat }
                    />
                ) }
            </Container>
        </React.Fragment>
    )
};

export default ChatList;