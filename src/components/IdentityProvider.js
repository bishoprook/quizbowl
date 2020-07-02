import React, { useState } from 'react';
import IdentityContext from './IdentityContext.js';

const IdentityProvider = ({ room, children }) => {
    const { name, teamName } = decodeURIComponent(document.cookie)
        .split(/; ?/)
        .map(kvp => kvp.split('='))
        .reduce((aggregate, [k, v]) => ({ [k]: v, ...aggregate }), {});

    const loggedIn = name != null && teamName != null;

    const [context, setContext] = useState({ loggedIn, name, teamName, saveIdentity: (name, teamName) => {
        const nextWeek = new Date(new Date().getTime() + 7*24*60*60*1000).toGMTString();
        document.cookie = `name=${name}; expires=${nextWeek}; path=/player/${room}`;
        document.cookie = `teamName=${teamName}; expires=${nextWeek}; path=/player/${room}`;
        setContext({ loggedIn: true, name, teamName });
    }});

    return <IdentityContext.Provider value={context}>{children}</IdentityContext.Provider>
}

export default IdentityProvider;
