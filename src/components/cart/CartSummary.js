import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Badge, NavItem, NavLink
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import { Link } from 'react-router-dom';


class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink > Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }
    removeFromCart = (product) => {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi.", 2)
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Carts <b>{this.props.cart.length}</b>
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge onClick={() => this.removeFromCart(cartItem.product)} color="danger">X</Badge>
                                {cartItem.product.productName}---
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>Sepeti Görüntüle</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
