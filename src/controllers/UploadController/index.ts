import {Request, Response} from 'express'

const UploadController = (request: Request, response: Response) => {
    return response.status(200).json({message: 'upload controller'})
}

export default UploadController
