import Navbar from "./Navbar";

function Layout( {children} ) {
    return ( 
        <div className="container">
            <div className="navbar"><Navbar /></div>
            <div className="content">{children}</div>
        </div>
    );
}

export default Layout;