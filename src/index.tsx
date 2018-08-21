import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './App';
import store from './redux/Store';
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
    <LocaleProvider locale={zhCN}>
        <Provider store={store}>
            <App/>
        </Provider>
    </LocaleProvider>,
    document.getElementById('root')
);

