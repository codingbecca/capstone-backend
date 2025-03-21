import { Router } from "express";
import Project from "../models/Project.js";

const projectRouter = new Router();

projectRouter
    .route('/')
    /**
     * GET /api/projects returns all projects
     */
    .get(async(req, res) => {
        try {
            const projects = await Project.find();

            if(projects.length === 0) res.status(404).json({message: "projects not found"})
            else res.json(projects)
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }
    })
    /**
     * POST /api/projects creates a new project 
     */
    .post(async(req, res) => {
        try {
            const newProject = new Project(req.body)
            await newProject.save()

            res.status(201).json(newProject)
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }
    })

projectRouter
    .route('/:projectId')
    /**
     * GET /api/projects/:projectId returns a single project by id
     */
    .get(async(req, res) => {
        try {
            const project = await Project.findById(req.params.projectId)

            if(!project) res.status(404).json({message: 'Project not found'})
            else res.json(project)
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }

    })
    /**
     * PATCH /api/projects/:projectId update a project by id
     */
    .patch(async(req, res) => {
        try {
            const project = await Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true})

            if(!project) res.status(404).json({message: 'Project not found'})
            else res.json(project)
            
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })  
        }
    })
    /**
     * DELETE /api/projects/:projectId deletes a project by id
     */
    .delete(async(req, res) => {
        try {
            const project = await Project.findByIdAndDelete(req.params.projectId)

            if(!project) res.status(404).json({message: 'Project not found'})
            else res.send("Project successfully deleted")
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }
    }) 

export default projectRouter;