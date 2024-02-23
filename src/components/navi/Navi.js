import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

function Navi(args) {

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="me-left" navbar>
                    <NavItem>
                        <CartSummary />
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navi;