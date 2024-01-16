import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PesananApi from "../../api/pesanan.api";
import { useEffect, useState } from "react";
import Image from "next/image";
import MyModal from "./MyModal";

const Pesanan = ({ dataAdded }) => {
    const pesananApi = new PesananApi();
    const [datas, setDatas] = useState([]);
    const [totalPrice, setTotalPrice] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const fetchDatapesanan = async () => {
        try {
            const response = await pesananApi.getAll();
            setDatas(response);
            calculateTotalPrice(response)
        } catch (error) {
            console.error(error.message);
        }
    };
    const calculateTotalPrice = (data) => {
        const total = data.reduce((accumulator, item) => {
            const productPrice = item.productId.price;
            const subtotal = productPrice * item.quantity;
            return accumulator + subtotal;
        }, 0);
        setTotalPrice(total)
    };
    const handleDelete = async () => {
        try {
            await pesananApi.deleteCart();
            fetchDatapesanan();
        } catch (error) {
            console.error(error.message);
        }
    };
    const handlePrintBill = () => {
        alert("BILL SEDANG DICETAK");
    };
    const handleSave = ()=>{
        alert("SUDAH DISIMPAN")
    }
    const handleIsOpen=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        fetchDatapesanan();
    }, [dataAdded]);

    return (
        <div className="w-3/4 h-3/4 bg-white rounded-xl border-2 border-slate-400 p-4">
            <div className=" w-full h-3/4 overflow-y-auto">
                <h1 className="text-center text-2xl mb-4">
                    <AccountCircleIcon className="text-4xl" />
                    Pesanan
                </h1>
                {datas.map((data, index) => {
                    return (
                        <div className="flex h-1/6 bg-white items-center mb-2" key={index}>
                            <div className="w-2/6 h-full relative">
                            <Image src={`/uploaded_image/${data.productId.image}`} fill alt="food-pict"  />
                            </div>
                            <h1 className="w-2/6 ml-1">{data.productId.title}</h1>
                            <h1 className="w-1/6">x{data.quantity}</h1>
                            <h1 className="w-1/6 text-blue-400 font-bold">{data.productId.price * data.quantity}</h1>
                        </div>
                    );
                })}
            </div>
            <div className="mt-4">
                <Button variant="outlined" className="border-2 border-red-500 hover:border-2 hover:border-red-600 text-red-500 w-full mb-2" onClick={handleDelete}>
                    Clear Cart
                </Button>
                <div className="flex justify-between">
                    <Button variant="contained" className="bg-green-600 hover:bg-green-800 w-2/5 mb-2" onClick={handleSave}>
                        Save Bill
                    </Button>
                    <Button variant="contained" className="bg-green-600 hover:bg-green-800 w-2/5 mb-2" onClick={handlePrintBill}>
                        Print Bill
                    </Button>
                </div>
                <Button variant="contained" className="bg-blue-400 hover:bg-blue-600 w-full mb-2" onClick={handleIsOpen}>
                    Charge Rp.{totalPrice}
                </Button>
            </div>
            {/* Modal */}
            <MyModal open={isOpen} close={handleIsOpen} data={datas} totalPrice={totalPrice} handleDelete={handleDelete} />
        </div>
    );
};
export default Pesanan;
