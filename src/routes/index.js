import { newsRouter } from "./news.js";
import { siteRouter } from "./site.js";
import { courseRouter } from "./courses.js";
import { MeRouter } from "./me.js";
import { ProductRouter } from "./product.js";
function route(app) {
    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
    app.use('/me', MeRouter)
    app.use('/', siteRouter)
    app.use('/api/createproduct', ProductRouter)
}

export default route