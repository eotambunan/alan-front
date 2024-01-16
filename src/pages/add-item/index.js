import { Button, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import Uploader from "../../components/elements/Uploader"
import { useEffect, useState } from "react";
import ProductApi from "../../api/product.api";
import { useRouter } from "next/router";


const AddItem = () => {
    const router = useRouter()
    const productApi = new ProductApi
    const [imageName,setImageName] = useState("")
    const [payload,setPayload] = useState({
        title: "",
        image: "",
        price : ""
    })
    const handleClick = async ()=>{
        try {
            const response = await productApi.addProduct(payload)
            router.push("/food")
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        setPayload(prevPayload => ({ ...prevPayload, image: imageName }));
    },[imageName])
    return (
        <div className="bg-white w-full h-[70vh] p-8">
            <h1 className="text-blue-400 text-2xl mb-8">Tambahkan Menu</h1>
            <div>
                <label htmlFor="name" className="block">
                    Nama Menu
                </label>
                <input type="text" id="name" className="w-full border-2 border-slate-300 h-12" value={payload.title} onChange={(e) => { setPayload({ ...payload, title: e.target.value }) }} />
                <label htmlFor="gambar" className="block">
                    Gambar
                </label>
                <div>
                    <Uploader setImageName={setImageName}/>
                </div>
                <label htmlFor="name" className="block">
                    Harga
                </label>
                <div className="flex items-center h-12">
                    <div className="bg-blue-400 rounded h-full w-16 flex items-center justify-center text-white">Rp.</div>
                    <input type="text" id="name" className="border-2 border-slate-300 h-full w-full" value={payload.price} onChange={(e) => { setPayload({ ...payload, price: e.target.value }) }} />
                </div>
            </div>
            <div className="grid place-items-end mt-4">
                <Button variant="container" className="bg-blue-400 hover:bg-glue-600" onClick={handleClick}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default AddItem;
