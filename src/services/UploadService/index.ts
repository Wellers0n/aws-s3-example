import {S3} from 'aws-sdk'
import {resolve} from "path";
import * as fs from "fs";
import {tmpFolder} from "../../helpers/tmpFolder";
import mime from "mime";
import {keys} from "../../configs/keys";

const UploadService = async (file: string) => {
    const originalName = resolve(tmpFolder, file)
    const ContentType = mime.getType(originalName)
    const fileContent = await fs.promises.readFile(originalName)
    const user = {
        file: 'avatar.jpg'
    }

    const client = new S3({
        region: 'sa-east-1'
    })

    if (user.file) {
        await client.deleteObject({
            Bucket: keys.s3.bucket,
            Key: user.file
        }).promise()
    }

    // @ts-ignore
    await client.putObject({
        Bucket: keys.s3.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType
    }).promise()

    await fs.promises.unlink(originalName)

    return `${keys.s3.url}/${file}`
}

export default UploadService
