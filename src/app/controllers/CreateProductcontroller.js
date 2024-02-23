import { ModelCourse } from "../models/Courses.js";

const CreateProductcontroller = {
    create: async (req, res) => {
        try {
            const newProduct = new ModelCourse(req.body);
            const saveProduct = await newProduct.save();
            res.status(200).json(saveProduct);
        } catch (error) {
            throw error;
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
            const userId = req.params.id;

            if (!userId) {
                return res.status(200).json({
                    status: 'ERR',
                    message: 'The usere is required'

                })

            }

            const response = await ModelCourse.deleteProduct(userId);
            return res.status(200).json(response)


        } catch (error) {
            throw error;
        }

    },


}

export { CreateProductcontroller }