import { IKeysProps } from './'

export const staging = {
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
    mongoURI: process.env.STAGING_MONGO_URI
} as IKeysProps
