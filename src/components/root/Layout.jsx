import Navbar from "./Navbar";

function Layout({childComp}) {
    return (
        <>
            <Navbar />
            {childComp}
        </>
    );
}

export default Layout;