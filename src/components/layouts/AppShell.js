import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const AppShell = ({ children }) => {
    return (
        <div className=" h-[200vh] bg-slate-100">
            <Navbar />
            <Header />
            <Footer />
            <div className="px-32 ">
            {children}
            </div>
        </div>
    );
};

export default AppShell;
