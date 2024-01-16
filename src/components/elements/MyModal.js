import { Button, Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import MyTable from "./MyTable";

const MyModal = ({ open, close, data, totalPrice, handleDelete }) => {
    const [dataModal, setData] = useState([]);
    const [input,setInput] = useState("")
    const [change,setChange] = useState("")

    const countChange = ()=>{
        if(input<totalPrice)setChange("Uang Kurang")
        else if(input>totalPrice)setChange(input-totalPrice)
    }

    useEffect(() => {
        const dataForModal = data.map((item) => ({
            title: item.productId.title,
            price: item.productId.price * item.quantity,
            image : item.productId.image
          }));
          setData(dataForModal)
    }, [data]);
    useEffect(()=>{
        countChange()
    },[input])
    const handlePay = ()=>{
        close()
        handleDelete()
    }

    return (
        <Modal open={open} onClose={close} className="flex items-center">
            <div className="bg-white w-1/2 h-2/3 m-auto p-8">
                <h1 className="text-2xl">Detail Pesanan</h1>
                <div className="flex">
                    <div className="w-3/5">
                        <MyTable datas={dataModal}/>
                    </div>
                    <div className="w-2/5 px-8">
                        <h1 className="text-2xl text-center mb-4">Uang Pembeli</h1>
                        <input className="w-full h-8 border-2 border-slate-300 rounded-lg" type="number" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                        <div className="flex justify-evenly mt-4">
                            <Button variant="contained" className="bg-slate-100 hover:bg-slate-300 w-1/3 text-slate-600" onClick={close}>
                                Close
                            </Button>
                            <Button variant="contained" className="bg-blue-400 hoverr:bg-blue-600 w-1/3" onClick={handlePay}>
                                Pay !
                            </Button>
                        </div>
                        <p className="text-red-500 mt-4">Kembalian : {change}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default MyModal;
