import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="Nav">
                <nav className="grey darken-4">
                    <div className="nav-wrapper container ">
                        <a href="/" className="brand-logo">Weather Application</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;