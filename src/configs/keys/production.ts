import { IKeysProps } from './'

export const production = {
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
    mongoURI: process.env.PRODUCTION_MONGO_URI
} as IKeysProps
