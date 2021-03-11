import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container,
    Messages,
    InputWrapper,
    Input,
    InputIcon 
} from './styles';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef])

    return (
        <Container>
            <Messages ref={messageRef}>
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content = {
                        <>
                            <Mention>@Rafa Melo </Mention>
                            Hello World!
                        </>
                    }
                    date="19/06/2020"
                    isBot
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content = {
                        <>
                            <Mention>@Rafa Melo </Mention>
                            Hello World!
                        </>
                    }
                    date="19/06/2020"
                    isBot
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content = {
                        <>
                            <Mention>@Rafa Melo </Mention>
                            Hello World!
                        </>
                    }
                    date="19/06/2020"
                    isBot
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content = {
                        <>
                            <Mention>@Rafa Melo </Mention>
                            Hello World!
                        </>
                    }
                    date="19/06/2020"
                    isBot
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content="Hello World!"
                    date="19/06/2020"
                    hasMention
                />
                <ChannelMessage 
                    author="Rafael Melo"
                    content = {
                        <>
                            <Mention>@Rafa Melo </Mention>
                            Hello World!
                        </>
                    }
                    date="19/06/2020"
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;