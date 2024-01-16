import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import ProductApi from "../../api/product.api";

const FileUpload = ({setImageName}) => {
    const productApi = new ProductApi();
    const onDrop = useCallback(async (acceptedFiles) => {
        try {
            const file = acceptedFiles[0];
    
            const formData = new FormData();
            formData.append("image", file);
    
            const response = await productApi.addProductImage(formData);
    
            setImageName(response.message)
        } catch (error) {
            console.error("Error uploading image:", error.message);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ border: "2px dashed #cccccc", padding: "20px", textAlign: "center" }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop a file here, or click to select a file</p>
        </div>
    );
};

export default FileUpload;
