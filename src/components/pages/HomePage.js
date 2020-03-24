import React from 'react';
import BookList from '../bookList/BookList';
import ShoppingCartTable from '../shoppingCartTable/ShoppingCartTable';

const HomePage = ()=> {
    return(
        <div>            
            <BookList />
            <ShoppingCartTable />
        </div>
        
    );
};

export default HomePage;