import React, { Component } from 'react';
import BookListItem from '../bookListItem/BookListItem';
import { connect } from 'react-redux';
import {withBookstoreService} from '../hoc/withBookstoreService';
import { booksLoaded, booksRequested, booksError, bookAddedToCart} from '../../actions/index';
import compose from '../../utilits/compose';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';
import './bookList.css';

class BookList extends Component {
    
    componentDidMount(){
        this.props.fetchBooks();
    }
    
    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if(loading){
            return <Spinner />
        }

        if(error){
            return <ErrorIndicator />
        }
        
        return (
            <ul className="book-list">
                {
                    books.map((book)=>{
                        return(
                            <li key={book.id}><BookListItem 
                                                book={book} 
                                                onAddedToCart={()=>onAddedToCart(book.id)} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
}

const mapDispatchToProps = (dispatch, ownProps)=> {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: ()=>{
            dispatch(booksRequested());
            bookstoreService.getBooks()
            .then((data)=> dispatch(booksLoaded(data)))
            .catch((err)=> dispatch(booksError(err)));
        },
        onAddedToCart: (id)=> dispatch(bookAddedToCart(id))
    }
};

export default compose(withBookstoreService(), 
                        connect(mapStateToProps, mapDispatchToProps))
                        (BookList);