const informationControllers = {
    aboutPage: (req, res) => {
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'About page',
            body: 'includes/about', 
            token
        });
    },
    contactPage: (req, res) => {
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Contact page',
            body: 'includes/contact', 
            token
        });
    }
};

export default informationControllers;

