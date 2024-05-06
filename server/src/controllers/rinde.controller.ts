import {Request, Response} from 'express';
import connection from '../db/connection';

export const getRindes = (req:Request, res: Response)=>{
    connection.query('SELECT * FROM `TagRinde`', (err, data) =>{
        if(err) throw err;
res.json(data)

    })
}


export const getRinde = (req:Request, res: Response)=>{

const {id}=req.params

connection.query('SELECT * FROM TagRinde WHERE id = ? ',id, (err, data) =>{
    if(err) throw err;
res.json(data[0])

})

}

export const deleteRinde = (req:Request, res: Response)=>{

    const {id}=req.params
    
    connection.query('DELETE FROM TagRinde WHERE id = ?',id, (err, data) =>{
        if(err) throw err;
    res.json({
        msg: 'registro eliminado'
    })

    })

    }

    export const postRinde = (req:Request, res: Response)=>{
        const {body} = req;

        connection.query('INSERT INTO TagRinde set ?',[body], (err, data) =>{
            if(err) throw err;
        res.json({
            msg: 'registro agregado'
        })

        })

        }

        export const putRinde = (req:Request, res: Response)=>{
            const {body} = req;
            const {id}=req.params

            connection.query('UPDATE TagRinde set  ? WHERE id = ?',[body, id], (err, data) =>{
                if(err) throw err;
            res.json({
                msg: 'registro actualizado'
            })

            })
            
        
        }