import { useRouter } from "next/router";

const Header = () => {
    const router= useRouter()
    const getQuerry = router.pathname
    const handleClick = ()=>{
        console.log(getQuerry)
    }

    return (
        <div className="h-16 flex items-center pl-40 shadow-lg mb-12 bg-white">
            <div className={`${getQuerry==="/food"&&"border-b-2 text-blue-400"} border-blue-400 h-full flex items-center cursor-pointer`} onClick={()=>router.push("/food")}>
                <h1 className="text-2xl ">Food</h1>
            </div>
            <div className={`${getQuerry==="/"&&"border-b-2 text-blue-400"} border-blue-400 h-full flex items-center cursor-pointer ml-8`} onClick={()=>router.push("/")}>
                <h1 className="text-2xl ">Transaksi</h1>
            </div>
        </div>
    );
};

export default Header;
