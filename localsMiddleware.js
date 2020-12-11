import routes from "./routers";

export const localsMiddleware = (req,res,next) =>{
    res.locals.siteName = 'Study';
    res.locals.routes = routes;
    next();
}