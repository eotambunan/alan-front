const axios = require("axios");

class Product {
    async getAll() {
        try {
            const response = await axios.get("http://localhost:3000/v1/cart");
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
    async addCart(payload) {
        try {
            const response = await axios.post("http://localhost:3000/v1/cart", {
                productId: payload,
                quantity: 1,
            });
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
    async deleteCart() {
        try {
            const response = await axios.delete("http://localhost:3000/v1/cart");
            return response.data.data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Product;
