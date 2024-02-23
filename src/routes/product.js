import express from 'express';
import { CreateProductcontroller } from '../app/controllers/CreateProductcontroller.js';
import { Router } from 'express';

export const ProductRouter = Router();
ProductRouter.post("/", CreateProductcontroller.create)
ProductRouter.get("/getProduct", CreateProductcontroller.getALLPoduct)
ProductRouter.delete("/deleteProduct/:id", CreateProductcontroller.deleteProduct)