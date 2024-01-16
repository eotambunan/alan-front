import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const MyTable = ({ datas }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="w-1/12" align="center">
                            #
                        </TableCell>
                        <TableCell className="w-6/12" align="left">
                            Name
                        </TableCell>
                        <TableCell className="w-3/12" align="center">
                            Foto
                        </TableCell>
                        <TableCell className="w-2/12" align="center">
                            Harga
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((data, index) => {
                        return (
                            <TableRow className="h-28" key={index}>
                                <TableCell align="center">{index + 1}</TableCell>
                                <TableCell align="left">{data.title}</TableCell>
                                <TableCell align="center" className="relative">
                                    <Image src={`/uploaded_image/${data.image}`} width={80} height={80} alt="food-pict" />
                                </TableCell>
                                <TableCell align="center">Rp.{data.price}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyTable;
