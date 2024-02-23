import { ModelCourse } from "../models/Courses.js";
import { mutipleMongooseToObject, MongooseToObject } from "../../until/mongoose.js";
const siteController = {
    index: async (req, res, next) => {
        await ModelCourse.find({})
            .then(courses => {
                res.render('home',
                    { courses: mutipleMongooseToObject(courses) })
            })
            .catch(next)

        // return res.render('home');
    },
    search: (req, res) => {
        return res.render('search');
    },
};
export { siteController };
