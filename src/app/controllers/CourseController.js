import { ModelCourse } from "../models/Courses.js";
import { MongooseToObject } from "../../until/mongoose.js";
const CourseController = {
    // slug
    show: async (req, res, next) => {
        await ModelCourse.findOne({ slug: req.params.slug }).exec()
            .then(course => {
                res.render('courses/show', { course: MongooseToObject(course) })
            })
            .catch(next)
    },

    // [GET] /course/create
    create: (req, res, next) => {
        res.render('courses/create')
    },
    store: async (req, res, next) => {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/owkUdSHLWAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCj9Xe8ze1oVfb9q9ynQ3ZlZdoB0w`
        const course = new ModelCourse(formData);
        await course.save()
            .then(() => res.redirect('/'))

    },
    // [GET] id/edit
    edit: async (req, res, next) => {
        await ModelCourse.findById(req.params.id)
            .then(course => res.render("courses/edit", { course: MongooseToObject(course) }))
            .catch(next)
    },
    // [PUT] /courses/:id
    update: async (req, res, next) => {
        await ModelCourse.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/"))
            .catch(next)
    },

    // [DELETE] /courses/:id
    delete: async (req, res, next) => {
        await ModelCourse.findOneAndDelete({ _id: req.params.id })
            .then(() => res.redirect("/"))
            .catch(next)

    },
};
export { CourseController };
