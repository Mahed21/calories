import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = 'dev-y2zxsjoi.us.auth0.com';
    const clientId = 'FbABiA8sm1SLbWnh3IM8Kn3TyBjbQYsL';
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate('/');
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;