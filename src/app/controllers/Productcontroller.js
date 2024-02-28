import { ModelCourse } from "../models/Courses.js";
import { createProduct, updateProduct, deleteProduct, getDetailsProduct } from "../../services/ProductService.js"

const Productcontroller = {
    create: async (req, res) => {
        try {
            const { name, img, type, price, description } = req.body
            if (!name || !img || !price) {
                return res.status(200).json({
                    status: 'ERR',
                    message: 'The input is required'
                })
            }
            console.log(res.body);
            const response = await createProduct(req.body)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(404).json({
                message: e
            })
        }
    },

    // GET
    getALLPoduct: async (req, res) => {
        try {
            const product = await ModelCourse.find();
            res.status(200).json(product);

        } catch (error) {
            throw error;
        }

    },
    // DELETE
    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.id
            if (!productId) {
                return res.status(200).json({
                    status: 'ERR',
                    message: 'The productId is required'
                })
            }
            const response = await deleteProduct(productId)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(404).json({
                message: e
            })
        }

    },

    //update
    update: async (req, res) => {
        try {
            const productId = req.params.id
            const data = req.body
            if (!productId) {
                return res.status(200).json({
                    status: 'ERR',
                    message: 'The productId is required'
                })
            }
            const response = await updateProduct(productId, data)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(404).json({
                message: e
            })
        }

    },

    //getDetail

    getDetailsProduct: async (req, res) => {
        try {
            const productId = req.params.id
            if (!productId) {
                return res.status(200).json({
                    status: 'ERR',
                    message: 'The productId is required'
                })
            }
            const response = await getDetailsProduct(productId)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(404).json({
                message: e
            })
        }
    }

}

export { Productcontroller }