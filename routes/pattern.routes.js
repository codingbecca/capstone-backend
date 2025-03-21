import { Router } from "express";
import Pattern from "../models/Pattern";

const patternRouter = new Router();

patternRouter
    .route('/')
    /**
     * GET /api/patterns returns all patterns
     */
    .get(async(req, res) => {
        try {
            const patterns = await Pattern.find();

            if(patterns.length === 0) res.status(404).json({message: "Patterns not found"})
            else res.json(patterns)
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }
    })
    /**
     * POST /api/patterns creates a new pattern 
     */
    .post(async(req, res) => {
        try {
            const newPattern = new Pattern(req.body)
            await newPattern.save()

            res.status(201).json(newPattern)
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }
    })

patternRouter
    .route('/:patternId')
    /**
     * GET /api/patterns/:patternId returns a single pattern by id
     */
    .get(async(req, res) => {
        try {
            const pattern = await Pattern.findById(req.params.patternId)

            if(!pattern) res.status(404).json({message: 'Pattern not found'})
            else res.json(pattern)
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }

    })
    /**
     * PATCH /api/patterns/:patternId
     */
    .patch(async(req, res) => {
        try {
            const pattern = await Pattern.findByIdAndUpdate(req.params.patternId, req.body, {new: true})

            if(!pattern) res.status(404).json({message: 'Pattern not found'})
            else res.json(pattern)
            
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })  
        }
    })
    .delete(async(req, res) => {
        try {
            const pattern = await Pattern.findByIdAndDelete(req.params.patternId)

            if(!pattern) res.status(404).json({message: 'Pattern not found'})
            else res.send("Pattern successfully deleted")
        } catch (e) {
            console.error(e)

            res.status(400).json({
                error: e.name,
                message: e.message
            })
        }
    }) 

export default patternRouter;