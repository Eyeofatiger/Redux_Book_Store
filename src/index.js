import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import ErrorBoundry from './components/errorBoundry/ErrorBoundry';
import BookstoreService from './services/bookstoreService';
import { BookstoreServiceProvider } from './components/bookstoreServiceContext/bookstoreServiceContext';
import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));
