import { staging } from './staging'
import { production } from './production'

const { NODE_ENV } = process.env

export interface IKeysProps {
    port: string
    environment: string
    mongoURI: string
}

let keys: IKeysProps

switch (NODE_ENV) {
    case 'test':
        keys = staging
        break
    case 'staging':
        keys = staging
        break
    case 'production':
        keys = production
        break
    default:
        keys = staging
        break
}

export { keys }
