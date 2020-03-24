export const booksLoaded = (newBooks)=>{
    return{
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

export const booksRequested = ()=> {
    return{
        type: 'FETCH_BOOKS_REQUEST',
    };
};

export const booksError = (error)=> {
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

export const bookAddedToCart = (bookId)=> {
    return{
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};