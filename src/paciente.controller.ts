import { Request, Response } from 'express'
import { orm } from './db/orm'

async function add(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

async function remove(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

async function update(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

async function findOne(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

async function findAll(req: Request, res: Response) {
    res.status(500).json({ message: 'not implemented' })
    
}

export { add, remove, update, findOne, findAll }