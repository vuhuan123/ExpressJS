const NewsController = {
    index: (req, res) => {
        return res.render('news');
    },
    show: (req, res) => {
        res.send('Show Detail');
    },
};
export { NewsController };
