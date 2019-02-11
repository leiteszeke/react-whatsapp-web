import React from 'react';
import {
    Container,
    Aside,
    Header,
    HeaderContainer,
    Thumbnail,
    Image,
    Icon,
    Chats,
    Content,
} from './style';
import ChatList from '../ChatList';
import Chat from '../Chat';

const Layout = (props) => {
    return (
        <Container>
            <Aside>
                <Header>
                    <HeaderContainer>
                        <Thumbnail>
                            <Image source="https://picsum.photos/250/250" />
                        </Thumbnail>
                    </HeaderContainer>
                    <HeaderContainer>
                        <Icon>more_vert</Icon>
                    </HeaderContainer>
                </Header>
                <Chats>
                    <ChatList
                        chats={ props.chats }
                        onClick={ props.onChatSelect }
                    />
                </Chats>
            </Aside>
            <Content>
                <Chat { ...props.chat } />
            </Content>
        </Container>
    );
};

export default Layout;