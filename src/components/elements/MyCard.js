import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ProductApi from "../../api/product.api";
import PesananApi from "../../api/pesanan.api";
import Image from "next/image";

const MyCard = ({ handleClick }) => {
    const productApi = new ProductApi();
    const pesananApi = new PesananApi();
    const [datas, setDatas] = useState([]);
    const fetchDataProduct = async () => {
        try {
            const response = await productApi.getAll();
            setDatas(response);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchDataProduct();
    }, []);
    useEffect(() => {
        console.log(datas);
    }, [datas]);

    return (
        <>
            {datas.map((data, index) => (
                <Card className="w-3/4 shadow-md mb-8 border-2 border-slate-300 h-72" key={index} onClick={() => handleClick(data._id)}>
                    <div className="w-full h-1/2 relative">
                        <Image src={`/uploaded_image/${data.image}`} fill alt="food-pict" />
                    </div>
                    <CardContent>
                        <Typography className="text-xl text-center">{data.title}</Typography>
                        <Typography className="text-center text-blue-400 font-bold">Rp. {data.price}</Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default MyCard;
