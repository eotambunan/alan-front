import MyCard from "@/components/elements/MyCard";
import Pesanan from "@/components/elements/Pesanan";
import PesananApi from "../../api/pesanan.api";
import { useState } from "react";

const TransaksiPage = () => {
    const pesananApi = new PesananApi();
    const [dataAdded, setDataAdded] = useState(false);
    const handleClick = async (payload) => {
        try {
            await pesananApi.addCart(payload);
            setDataAdded(!dataAdded);
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <div className="flex">
            <div className="w-3/5 grid grid-cols-3">
                <MyCard handleClick={handleClick}/>
            </div>
            <div className="w-2/5  h-[90vh] flex justify-center">
                <Pesanan dataAdded={dataAdded} />
            </div>
        </div>
    );
};
export default TransaksiPage;
