import express from 'express';
import { siteController } from '../app/controllers/siteController.js';
import { Router } from 'express';

export const siteRouter = Router();
siteRouter.get('/search', siteController.search);
siteRouter.get('/', siteController.index);
