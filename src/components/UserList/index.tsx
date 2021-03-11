import React from 'react';

import { Container,
    Role,
    User,
    Avatar 
} from './styles';

interface IProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<IProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Rafael Melo"/>

            <Role>Disponível - 20</Role>
            <UserRow nickname="Fulano" isBot />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Fulano" />
        </Container>
    )
};

export default UserList;