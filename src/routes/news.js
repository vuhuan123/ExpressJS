import express from 'express';
import { NewsController } from '../app/controllers/NewsController.js';
import { Router } from 'express';

export const newsRouter = Router();
newsRouter.get('/:slug', NewsController.show);
newsRouter.get('/', NewsController.index);
