import React from 'react';
import classnames from 'classnames';
import {
    Container,
    Text,
    Wrapper,
} from './style';

const Message = React.memo(function Message(props) {
    const {
        message,
        swap,
        user: {
            id,
        },
    } = props;

    return (
        <Container
            classes={ classnames({
                user: id === 1,
                host: id !== 1,
                swap: swap,
            })}
        >
            <Wrapper
                classes={ classnames({
                    user: id === 1,
                    host: id !== 1,
                })}
            >
                <Text>
                    { message }
                </Text>
            </Wrapper>
        </Container>
    )
})

export default Message;