import localVarRequest from 'request';

export * from './apiError';
export * from './application';
export * from './command';
export * from './compose';
export * from './container';
export * from './containerEnvironmentInner';
export * from './containerImageReference';
export * from './containerMountPointsInner';
export * from './createBackup202Response';
export * from './createBackupRequest';
export * from './createCommandRequest';
export * from './createCronJob422Response';
export * from './createCronJobRequest';
export * from './createEnvironmentRequest';
export * from './cron';
export * from './cronRun';
export * from './deleteBackup200Response';
export * from './downloadBackup200Response';
export * from './environment';
export * from './getEcrLoginCredentials200Response';
export * from './getSshAccessCredentials200Response';
export * from './getSshAccessCredentials200ResponseCredentials';
export * from './listBackups200Response';
export * from './listBackups200ResponseBackupsInner';
export * from './organizationsList200ResponseInner';
export * from './projectsList200ResponseInner';
export * from './purgeCreateRequest';
export * from './scalingPolicy';
export * from './syncOperation';
export * from './syncToEnvironmentRequest';
export * from './updateCronJobRequest';
export * from './updateEnvironmentRequest';
export * from './updateEnvironmentStateRequest';
export * from './updateEnvironmentVariableRequest';
export * from './v2Crawler';
export * from './v2CrawlerRequest';
export * from './v2CrawlerSchedule';
export * from './v2CrawlerScheduleRequest';
export * from './v2CustomHeader';
export * from './v2CustomHeaderRequest';
export * from './v2Domain';
export * from './v2DomainRequest';
export * from './v2Error';
export * from './v2Organization';
export * from './v2OrganizationRequest';
export * from './v2Project';
export * from './v2ProjectRequest';
export * from './v2Rule';
export * from './v2RuleAuth';
export * from './v2RuleAuthAction';
export * from './v2RuleAuthRequest';
export * from './v2RuleBotChallenge';
export * from './v2RuleBotChallengeAction';
export * from './v2RuleBotChallengeRequest';
export * from './v2RuleContentFilter';
export * from './v2RuleContentFilterAction';
export * from './v2RuleContentFilterRequest';
export * from './v2RuleCustomResponse';
export * from './v2RuleCustomResponseAction';
export * from './v2RuleCustomResponseRequest';
export * from './v2RuleFunction';
export * from './v2RuleFunctionAction';
export * from './v2RuleFunctionRequest';
export * from './v2RuleHeader';
export * from './v2RuleHeaderAction';
export * from './v2RuleHeaderRequest';
export * from './v2RuleProxy';
export * from './v2RuleProxyAction';
export * from './v2RuleProxyRequest';
export * from './v2RuleRedirect';
export * from './v2RuleRedirectAction';
export * from './v2RuleRedirectRequest';
export * from './v2RuleRequest';
export * from './v2RuleServeStatic';
export * from './v2RuleServeStaticAction';
export * from './v2RuleServeStaticRequest';
export * from './v2SecretStore';
export * from './v2SecretStoreRequest';
export * from './v2Store';
export * from './v2StoreRequest';
export * from './validateCompose200Response';
export * from './validateComposeRequest';
export * from './variable';
export * from './volume';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiError } from './apiError';
import { Application } from './application';
import { Command } from './command';
import { Compose } from './compose';
import { Container } from './container';
import { ContainerEnvironmentInner } from './containerEnvironmentInner';
import { ContainerImageReference } from './containerImageReference';
import { ContainerMountPointsInner } from './containerMountPointsInner';
import { CreateBackup202Response } from './createBackup202Response';
import { CreateBackupRequest } from './createBackupRequest';
import { CreateCommandRequest } from './createCommandRequest';
import { CreateCronJob422Response } from './createCronJob422Response';
import { CreateCronJobRequest } from './createCronJobRequest';
import { CreateEnvironmentRequest } from './createEnvironmentRequest';
import { Cron } from './cron';
import { CronRun } from './cronRun';
import { DeleteBackup200Response } from './deleteBackup200Response';
import { DownloadBackup200Response } from './downloadBackup200Response';
import { Environment } from './environment';
import { GetEcrLoginCredentials200Response } from './getEcrLoginCredentials200Response';
import { GetSshAccessCredentials200Response } from './getSshAccessCredentials200Response';
import { GetSshAccessCredentials200ResponseCredentials } from './getSshAccessCredentials200ResponseCredentials';
import { ListBackups200Response } from './listBackups200Response';
import { ListBackups200ResponseBackupsInner } from './listBackups200ResponseBackupsInner';
import { OrganizationsList200ResponseInner } from './organizationsList200ResponseInner';
import { ProjectsList200ResponseInner } from './projectsList200ResponseInner';
import { PurgeCreateRequest } from './purgeCreateRequest';
import { ScalingPolicy } from './scalingPolicy';
import { SyncOperation } from './syncOperation';
import { SyncToEnvironmentRequest } from './syncToEnvironmentRequest';
import { UpdateCronJobRequest } from './updateCronJobRequest';
import { UpdateEnvironmentRequest } from './updateEnvironmentRequest';
import { UpdateEnvironmentStateRequest } from './updateEnvironmentStateRequest';
import { UpdateEnvironmentVariableRequest } from './updateEnvironmentVariableRequest';
import { V2Crawler } from './v2Crawler';
import { V2CrawlerRequest } from './v2CrawlerRequest';
import { V2CrawlerSchedule } from './v2CrawlerSchedule';
import { V2CrawlerScheduleRequest } from './v2CrawlerScheduleRequest';
import { V2CustomHeader } from './v2CustomHeader';
import { V2CustomHeaderRequest } from './v2CustomHeaderRequest';
import { V2Domain } from './v2Domain';
import { V2DomainRequest } from './v2DomainRequest';
import { V2Error } from './v2Error';
import { V2Organization } from './v2Organization';
import { V2OrganizationRequest } from './v2OrganizationRequest';
import { V2Project } from './v2Project';
import { V2ProjectRequest } from './v2ProjectRequest';
import { V2Rule } from './v2Rule';
import { V2RuleAuth } from './v2RuleAuth';
import { V2RuleAuthAction } from './v2RuleAuthAction';
import { V2RuleAuthRequest } from './v2RuleAuthRequest';
import { V2RuleBotChallenge } from './v2RuleBotChallenge';
import { V2RuleBotChallengeAction } from './v2RuleBotChallengeAction';
import { V2RuleBotChallengeRequest } from './v2RuleBotChallengeRequest';
import { V2RuleContentFilter } from './v2RuleContentFilter';
import { V2RuleContentFilterAction } from './v2RuleContentFilterAction';
import { V2RuleContentFilterRequest } from './v2RuleContentFilterRequest';
import { V2RuleCustomResponse } from './v2RuleCustomResponse';
import { V2RuleCustomResponseAction } from './v2RuleCustomResponseAction';
import { V2RuleCustomResponseRequest } from './v2RuleCustomResponseRequest';
import { V2RuleFunction } from './v2RuleFunction';
import { V2RuleFunctionAction } from './v2RuleFunctionAction';
import { V2RuleFunctionRequest } from './v2RuleFunctionRequest';
import { V2RuleHeader } from './v2RuleHeader';
import { V2RuleHeaderAction } from './v2RuleHeaderAction';
import { V2RuleHeaderRequest } from './v2RuleHeaderRequest';
import { V2RuleProxy } from './v2RuleProxy';
import { V2RuleProxyAction } from './v2RuleProxyAction';
import { V2RuleProxyRequest } from './v2RuleProxyRequest';
import { V2RuleRedirect } from './v2RuleRedirect';
import { V2RuleRedirectAction } from './v2RuleRedirectAction';
import { V2RuleRedirectRequest } from './v2RuleRedirectRequest';
import { V2RuleRequest } from './v2RuleRequest';
import { V2RuleServeStatic } from './v2RuleServeStatic';
import { V2RuleServeStaticAction } from './v2RuleServeStaticAction';
import { V2RuleServeStaticRequest } from './v2RuleServeStaticRequest';
import { V2SecretStore } from './v2SecretStore';
import { V2SecretStoreRequest } from './v2SecretStoreRequest';
import { V2Store } from './v2Store';
import { V2StoreRequest } from './v2StoreRequest';
import { ValidateCompose200Response } from './validateCompose200Response';
import { ValidateComposeRequest } from './validateComposeRequest';
import { Variable } from './variable';
import { Volume } from './volume';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CronRun.RunTypeEnum": CronRun.RunTypeEnum,
        "CronRun.StatusEnum": CronRun.StatusEnum,
        "ScalingPolicy.MetricEnum": ScalingPolicy.MetricEnum,
}

let typeMap: {[index: string]: any} = {
    "ApiError": ApiError,
    "Application": Application,
    "Command": Command,
    "Compose": Compose,
    "Container": Container,
    "ContainerEnvironmentInner": ContainerEnvironmentInner,
    "ContainerImageReference": ContainerImageReference,
    "ContainerMountPointsInner": ContainerMountPointsInner,
    "CreateBackup202Response": CreateBackup202Response,
    "CreateBackupRequest": CreateBackupRequest,
    "CreateCommandRequest": CreateCommandRequest,
    "CreateCronJob422Response": CreateCronJob422Response,
    "CreateCronJobRequest": CreateCronJobRequest,
    "CreateEnvironmentRequest": CreateEnvironmentRequest,
    "Cron": Cron,
    "CronRun": CronRun,
    "DeleteBackup200Response": DeleteBackup200Response,
    "DownloadBackup200Response": DownloadBackup200Response,
    "Environment": Environment,
    "GetEcrLoginCredentials200Response": GetEcrLoginCredentials200Response,
    "GetSshAccessCredentials200Response": GetSshAccessCredentials200Response,
    "GetSshAccessCredentials200ResponseCredentials": GetSshAccessCredentials200ResponseCredentials,
    "ListBackups200Response": ListBackups200Response,
    "ListBackups200ResponseBackupsInner": ListBackups200ResponseBackupsInner,
    "OrganizationsList200ResponseInner": OrganizationsList200ResponseInner,
    "ProjectsList200ResponseInner": ProjectsList200ResponseInner,
    "PurgeCreateRequest": PurgeCreateRequest,
    "ScalingPolicy": ScalingPolicy,
    "SyncOperation": SyncOperation,
    "SyncToEnvironmentRequest": SyncToEnvironmentRequest,
    "UpdateCronJobRequest": UpdateCronJobRequest,
    "UpdateEnvironmentRequest": UpdateEnvironmentRequest,
    "UpdateEnvironmentStateRequest": UpdateEnvironmentStateRequest,
    "UpdateEnvironmentVariableRequest": UpdateEnvironmentVariableRequest,
    "V2Crawler": V2Crawler,
    "V2CrawlerRequest": V2CrawlerRequest,
    "V2CrawlerSchedule": V2CrawlerSchedule,
    "V2CrawlerScheduleRequest": V2CrawlerScheduleRequest,
    "V2CustomHeader": V2CustomHeader,
    "V2CustomHeaderRequest": V2CustomHeaderRequest,
    "V2Domain": V2Domain,
    "V2DomainRequest": V2DomainRequest,
    "V2Error": V2Error,
    "V2Organization": V2Organization,
    "V2OrganizationRequest": V2OrganizationRequest,
    "V2Project": V2Project,
    "V2ProjectRequest": V2ProjectRequest,
    "V2Rule": V2Rule,
    "V2RuleAuth": V2RuleAuth,
    "V2RuleAuthAction": V2RuleAuthAction,
    "V2RuleAuthRequest": V2RuleAuthRequest,
    "V2RuleBotChallenge": V2RuleBotChallenge,
    "V2RuleBotChallengeAction": V2RuleBotChallengeAction,
    "V2RuleBotChallengeRequest": V2RuleBotChallengeRequest,
    "V2RuleContentFilter": V2RuleContentFilter,
    "V2RuleContentFilterAction": V2RuleContentFilterAction,
    "V2RuleContentFilterRequest": V2RuleContentFilterRequest,
    "V2RuleCustomResponse": V2RuleCustomResponse,
    "V2RuleCustomResponseAction": V2RuleCustomResponseAction,
    "V2RuleCustomResponseRequest": V2RuleCustomResponseRequest,
    "V2RuleFunction": V2RuleFunction,
    "V2RuleFunctionAction": V2RuleFunctionAction,
    "V2RuleFunctionRequest": V2RuleFunctionRequest,
    "V2RuleHeader": V2RuleHeader,
    "V2RuleHeaderAction": V2RuleHeaderAction,
    "V2RuleHeaderRequest": V2RuleHeaderRequest,
    "V2RuleProxy": V2RuleProxy,
    "V2RuleProxyAction": V2RuleProxyAction,
    "V2RuleProxyRequest": V2RuleProxyRequest,
    "V2RuleRedirect": V2RuleRedirect,
    "V2RuleRedirectAction": V2RuleRedirectAction,
    "V2RuleRedirectRequest": V2RuleRedirectRequest,
    "V2RuleRequest": V2RuleRequest,
    "V2RuleServeStatic": V2RuleServeStatic,
    "V2RuleServeStaticAction": V2RuleServeStaticAction,
    "V2RuleServeStaticRequest": V2RuleServeStaticRequest,
    "V2SecretStore": V2SecretStore,
    "V2SecretStoreRequest": V2SecretStoreRequest,
    "V2Store": V2Store,
    "V2StoreRequest": V2StoreRequest,
    "ValidateCompose200Response": ValidateCompose200Response,
    "ValidateComposeRequest": ValidateComposeRequest,
    "Variable": Variable,
    "Volume": Volume,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
