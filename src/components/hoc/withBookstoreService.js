import React from 'react';
import { BookstoreServiceConsumer } from '../bookstoreServiceContext/bookstoreServiceContext';

export const withBookstoreService = ()=> (Wrapped)=> {

    return (props)=> {
        return(
            <BookstoreServiceConsumer>
                {
                    (bookstoreService)=> {
                        return(
                            <Wrapped {...props} 
                                bookstoreService={bookstoreService} />
                        );
                    }
                }
            </BookstoreServiceConsumer>
        );
    };
};