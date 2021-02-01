import { Router } from "./deps.ts";

const router = new Router();

router
    .get("/", (context) => {
        context.response.body = "Hello world!";
    })
    .get("/home", (context) => {
        context.response.body = "Home Page";
    })

export default router;