import Link from 'next/link'
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function Header() {
    return (
        <Nav
        >
            <NavItem style={{ margin: "25px" }}>
                <Link
                    href="create_category" style={{ margin: "15px" }}
                >
                    <a>Create Category</a>

                </Link>
            </NavItem>
            <NavItem style={{ margin: "25px" }}>

                <Link href="add_bookmark">
                    <a>Add BookMark</a>
                </Link>

            </NavItem>
            <NavItem style={{ margin: "25px" }}>

                <Link
                    href="bookmark_manager"
                >
                    <a>BookMark Manager</a>
                </Link>

            </NavItem>
        </Nav>
    )
}