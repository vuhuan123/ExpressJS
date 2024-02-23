import express from 'express';
import { CourseController } from '../app/controllers/CourseController.js';
import { Router } from 'express';

export const courseRouter = Router();
courseRouter.get('/create', CourseController.create);
courseRouter.post('/store', CourseController.store);
courseRouter.get('/:id/edit', CourseController.edit);
courseRouter.put('/:id', CourseController.update);
courseRouter.delete('/:id', CourseController.delete);
courseRouter.get('/:slug', CourseController.show);

