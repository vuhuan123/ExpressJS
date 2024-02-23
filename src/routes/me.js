import express from 'express';
import { MeController } from '../app/controllers/MeController.js';
import { Router } from 'express';

export const MeRouter = Router();
MeRouter.get('/stored/courses', MeController.storedCourses);

