export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './commandsApi';
import { CommandsApi } from './commandsApi';
export * from './composeApi';
import { ComposeApi } from './composeApi';
export * from './containersApi';
import { ContainersApi } from './containersApi';
export * from './cronApi';
import { CronApi } from './cronApi';
export * from './environmentsApi';
import { EnvironmentsApi } from './environmentsApi';
export * from './sSHAccessApi';
import { SSHAccessApi } from './sSHAccessApi';
export * from './scalingPolicyApi';
import { ScalingPolicyApi } from './scalingPolicyApi';
export * from './variablesApi';
import { VariablesApi } from './variablesApi';
export * from './volumesApi';
import { VolumesApi } from './volumesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ApplicationsApi, CommandsApi, ComposeApi, ContainersApi, CronApi, EnvironmentsApi, SSHAccessApi, ScalingPolicyApi, VariablesApi, VolumesApi];
