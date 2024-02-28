import express from 'express';
import { Productcontroller } from '../app/controllers/Productcontroller.js';
import { Router } from 'express';

export const ProductRouter = Router();
ProductRouter.post("/createProduct", Productcontroller.create)
ProductRouter.get("/getProduct", Productcontroller.getALLPoduct)
ProductRouter.put("/updateProduct/:id", Productcontroller.update)
ProductRouter.delete("/deleteProduct/:id", Productcontroller.deleteProduct)
ProductRouter.get("/getDetailProduct/:id", Productcontroller.getDetailsProduct)