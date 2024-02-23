import { ModelCourse } from "../models/Courses.js";
import { MongooseToObject, mutipleMongooseToObject } from "../../until/mongoose.js";
const MeController = {
    // [GET] /me/controller
    storedCourses: async (req, res, next) => {
        await ModelCourse.find({})
            .then((courses => res.render("me/stored-courses", { courses: mutipleMongooseToObject(courses) }
            )))
            .catch(next)

    },
};
export { MeController };
