import React from 'react'

import { Button } from './styles';

export interface IProps {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<IProps> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img alt="Rocketseat" src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"/>}
        </Button>
    )
}

export default ServerButton;