const axios = require('axios');

class Product{
    async getAll(){
        try {
            const response = await axios.get("http://localhost:3000/v1/product")
            return response.data.data    
        } catch (error) {
            throw error

        }
    }
    async addProduct(payload) {
        try {
            console.log(payload)
            const response = await axios.post("http://localhost:3000/v1/product", payload);
            return response.data
        } catch (error) {
            throw error;
        }
    }
    async addProductImage(payload) {
        try {
            const response = await axios.post("http://localhost:3000/v1/product/img", payload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports =  Product