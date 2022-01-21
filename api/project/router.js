// build your `/api/projects` router here
const express = require('express')

const PROJECTS = require('./model')

const router = express.Router()



//[GET] /api/projects

router.get('/', (req, res, next) => {
    PROJECTS.getAll()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch(next);
})

//[POST] /api/projects
router.post('/', async (req, res, next) => {
    try {
        const newProject = await PROJECTS.create(req.body)
        res.status(201).json({ 
            project_id: newProject.project_id,
            project_name: newProject.project_name,
            project_description: newProject.project_description,
            project_completed: newProject.project_completed === 0 ? false: true
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router