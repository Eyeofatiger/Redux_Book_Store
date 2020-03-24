import React from 'react';
import { connect } from 'react-redux';
import './shoppingCartTable.css';

const ShoppingCartTable = (props)=> {
    const {items, total, onIncrease, onDecrease, onDelete} = props;

    return(
        <div className="shopping-cart-table">
            <h1>Your order</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, idx)=>{
                            const {id, name, count, total} = item;

                            return(
                                <tr key={id}>
                                    <td>{idx + 1}</td>
                                    <td>{name}</td>
                                    <td>{count}</td>
                                    <td>{total}</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn"
                                                onClick={()=> onDelete(id)}>
                                            <i className="fa fa-trash-o" />
                                        </button>
                                        <button className="btn btn-outline-success btn"
                                                onClick={()=> onIncrease(id)}>
                                            <i className="fa fa-plus-circle" />
                                        </button>
                                        <button className="btn btn-outline-warning btn"
                                                onClick={()=> onDecrease(id)}>
                                            <i className="fa fa-minus-circle" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = (state)=> {
    return{
        items: state.cartItems,
        total: state.orderTotal
    };
};

const mapDispatchToProps = (dispatch)=> {
    return{}
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);