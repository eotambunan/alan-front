import { Button } from "@mui/material";
import MyTable from "@/components/elements/MyTable";
import ProductApi from "../../api/product.api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Food = () => {
    const router = useRouter()
    const productApi = new ProductApi();
    const [datas, setDatas] = useState([]);
    const fetchDataProduct = async () => {
        try {
            const response = await productApi.getAll();
            setDatas(response);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleClick= ()=>{
        router.push("/add-item")
    }

    useEffect(() => {
        fetchDataProduct();
    }, []);
    useEffect(() => {
        console.log(datas)
    }, [datas]);

    return (
        <div>
            <h1 className="text-xl text-slate-400">Tambahkan menu makanan yang ada di resto</h1>
            <div className="w-full min-h-[50vh] bg-white p-8">
                <Button variant="contained" className="bg-blue-400 hover:bg-blue-600 mb-8" onClick={handleClick}>
                    + Add Menu
                </Button>
                <MyTable datas={datas}/>
            </div>
        </div>
    );
};

export default Food;
