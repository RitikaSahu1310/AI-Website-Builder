// import express from "express"
// import { changes, generateWebsite, getWebsiteById, getAll, deploy, getBySlug } from "../controllers/website.controllers.js"
// import isAuth from "../middlewares/isAuth.js"

// const websiteRouter=express.Router()

// websiteRouter.post("/generate", isAuth, generateWebsite)
// websiteRouter.post("/update/:id",isAuth,changes)
// websiteRouter.get("/get-by-id/:id", isAuth, getWebsiteById)
// websiteRouter.get("/get-all",isAuth,getAll)
// websiteRouter.get("/deploy/:id",isAuth,deploy)
// websiteRouter.get("/get-by-slug/:slug",isAuth,getWebsiteById)
// export default websiteRouter

import express from "express"
import {
  changes,
  generateWebsite,
  getWebsiteById,
  getAll,
  deploy,
  getBySlug
} from "../controllers/website.controllers.js"

import isAuth from "../middlewares/isAuth.js"

const websiteRouter = express.Router()

websiteRouter.post("/generate", isAuth, generateWebsite)

websiteRouter.post("/update/:id", isAuth, changes)

websiteRouter.get("/get-by-id/:id", isAuth, getWebsiteById)

websiteRouter.get("/get-all", isAuth, getAll)

websiteRouter.get("/deploy/:id", isAuth, deploy)

// Public route - no isAuth here
websiteRouter.get("/get-by-slug/:slug", getBySlug)

export default websiteRouter