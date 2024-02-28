import mongoose from "mongoose";
import slug from "mongoose-slug-updater";

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    img: { type: String },
    price: { type: String, },
    type: { type: String },
    slug: { type: String, slug: "name", unique: true }
}, { timeseries: true });


export const ModelCourse = mongoose.model('Course', Course);