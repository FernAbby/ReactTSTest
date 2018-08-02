import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

declare global {
    export interface Config{
        CMC_CONSOLE_URL: string;
        CMC_CONSOLE_HEADER_LEFT_CSS: string;
        CMC_CONSOLE_HEADER_LEFT_JS: string;
        CALLBACK_LOGIN: string;
    }
    export interface Window {
        Config: Config;
        CookieJson: object;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

