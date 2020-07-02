import React from 'react';

const IdentityContext = React.createContext({
    loggedIn: false,
    name: null,
    teamName: null,
    saveIdentity: () => {}
});

export default IdentityContext;
