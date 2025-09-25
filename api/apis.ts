export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './backupManagementApi';
import { BackupManagementApi } from './backupManagementApi';
export * from './commandsApi';
import { CommandsApi } from './commandsApi';
export * from './composeApi';
import { ComposeApi } from './composeApi';
export * from './containersApi';
import { ContainersApi } from './containersApi';
export * from './crawlerSchedulesApi';
import { CrawlerSchedulesApi } from './crawlerSchedulesApi';
export * from './crawlersApi';
import { CrawlersApi } from './crawlersApi';
export * from './cronApi';
import { CronApi } from './cronApi';
export * from './domainsApi';
import { DomainsApi } from './domainsApi';
export * from './environmentsApi';
import { EnvironmentsApi } from './environmentsApi';
export * from './headersApi';
import { HeadersApi } from './headersApi';
export * from './kVApi';
import { KVApi } from './kVApi';
export * from './organizationsApi';
import { OrganizationsApi } from './organizationsApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './purgeApi';
import { PurgeApi } from './purgeApi';
export * from './rulesAuthApi';
import { RulesAuthApi } from './rulesAuthApi';
export * from './rulesBotChallengeApi';
import { RulesBotChallengeApi } from './rulesBotChallengeApi';
export * from './rulesContentFilterApi';
import { RulesContentFilterApi } from './rulesContentFilterApi';
export * from './rulesCustomResponseApi';
import { RulesCustomResponseApi } from './rulesCustomResponseApi';
export * from './rulesFunctionApi';
import { RulesFunctionApi } from './rulesFunctionApi';
export * from './rulesHeadersApi';
import { RulesHeadersApi } from './rulesHeadersApi';
export * from './rulesProxyApi';
import { RulesProxyApi } from './rulesProxyApi';
export * from './rulesRedirectApi';
import { RulesRedirectApi } from './rulesRedirectApi';
export * from './rulesServeStaticApi';
import { RulesServeStaticApi } from './rulesServeStaticApi';
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

export const APIS = [ApplicationsApi, BackupManagementApi, CommandsApi, ComposeApi, ContainersApi, CrawlerSchedulesApi, CrawlersApi, CronApi, DomainsApi, EnvironmentsApi, HeadersApi, KVApi, OrganizationsApi, ProjectsApi, PurgeApi, RulesAuthApi, RulesBotChallengeApi, RulesContentFilterApi, RulesCustomResponseApi, RulesFunctionApi, RulesHeadersApi, RulesProxyApi, RulesRedirectApi, RulesServeStaticApi, SSHAccessApi, ScalingPolicyApi, VariablesApi, VolumesApi];
