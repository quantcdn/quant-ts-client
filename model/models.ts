import localVarRequest from 'request';

export * from './application';
export * from './b7f433dd67508ecac5d4dccf1b7de5d9Request';
export * from './bfc82010fc344962814feda95595f25f200Response';
export * from './bfc82010fc344962814feda95595f25fRequest';
export * from './command';
export * from './compose';
export * from './container';
export * from './containerEnvironmentInner';
export * from './containerImageReference';
export * from './containerMountPointsInner';
export * from './cron';
export * from './cronRun';
export * from './d481164c455528711c302ff5e2b2bf5bRequest';
export * from './e0cf8adb0a3beb04279230cfb11634dfRequest';
export * from './environment';
export * from './model06b225e9857930e3933804092dfa7a4aRequest';
export * from './model3520dc6b6cb5f65baf4e76d50fb79df9422Response';
export * from './model3520dc6b6cb5f65baf4e76d50fb79df9Request';
export * from './model4dd1dde01a2dd974ee9a81b00fbde7f5Request';
export * from './model76f409a451ed135dbde0839b42c66c76Request';
export * from './model816747d873ee78401c7116175787b931200Response';
export * from './scalingPolicy';
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


import { Application } from './application';
import { B7f433dd67508ecac5d4dccf1b7de5d9Request } from './b7f433dd67508ecac5d4dccf1b7de5d9Request';
import { Bfc82010fc344962814feda95595f25f200Response } from './bfc82010fc344962814feda95595f25f200Response';
import { Bfc82010fc344962814feda95595f25fRequest } from './bfc82010fc344962814feda95595f25fRequest';
import { Command } from './command';
import { Compose } from './compose';
import { Container } from './container';
import { ContainerEnvironmentInner } from './containerEnvironmentInner';
import { ContainerImageReference } from './containerImageReference';
import { ContainerMountPointsInner } from './containerMountPointsInner';
import { Cron } from './cron';
import { CronRun } from './cronRun';
import { D481164c455528711c302ff5e2b2bf5bRequest } from './d481164c455528711c302ff5e2b2bf5bRequest';
import { E0cf8adb0a3beb04279230cfb11634dfRequest } from './e0cf8adb0a3beb04279230cfb11634dfRequest';
import { Environment } from './environment';
import { Model06b225e9857930e3933804092dfa7a4aRequest } from './model06b225e9857930e3933804092dfa7a4aRequest';
import { Model3520dc6b6cb5f65baf4e76d50fb79df9422Response } from './model3520dc6b6cb5f65baf4e76d50fb79df9422Response';
import { Model3520dc6b6cb5f65baf4e76d50fb79df9Request } from './model3520dc6b6cb5f65baf4e76d50fb79df9Request';
import { Model4dd1dde01a2dd974ee9a81b00fbde7f5Request } from './model4dd1dde01a2dd974ee9a81b00fbde7f5Request';
import { Model76f409a451ed135dbde0839b42c66c76Request } from './model76f409a451ed135dbde0839b42c66c76Request';
import { Model816747d873ee78401c7116175787b931200Response } from './model816747d873ee78401c7116175787b931200Response';
import { ScalingPolicy } from './scalingPolicy';
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
}

let typeMap: {[index: string]: any} = {
    "Application": Application,
    "B7f433dd67508ecac5d4dccf1b7de5d9Request": B7f433dd67508ecac5d4dccf1b7de5d9Request,
    "Bfc82010fc344962814feda95595f25f200Response": Bfc82010fc344962814feda95595f25f200Response,
    "Bfc82010fc344962814feda95595f25fRequest": Bfc82010fc344962814feda95595f25fRequest,
    "Command": Command,
    "Compose": Compose,
    "Container": Container,
    "ContainerEnvironmentInner": ContainerEnvironmentInner,
    "ContainerImageReference": ContainerImageReference,
    "ContainerMountPointsInner": ContainerMountPointsInner,
    "Cron": Cron,
    "CronRun": CronRun,
    "D481164c455528711c302ff5e2b2bf5bRequest": D481164c455528711c302ff5e2b2bf5bRequest,
    "E0cf8adb0a3beb04279230cfb11634dfRequest": E0cf8adb0a3beb04279230cfb11634dfRequest,
    "Environment": Environment,
    "Model06b225e9857930e3933804092dfa7a4aRequest": Model06b225e9857930e3933804092dfa7a4aRequest,
    "Model3520dc6b6cb5f65baf4e76d50fb79df9422Response": Model3520dc6b6cb5f65baf4e76d50fb79df9422Response,
    "Model3520dc6b6cb5f65baf4e76d50fb79df9Request": Model3520dc6b6cb5f65baf4e76d50fb79df9Request,
    "Model4dd1dde01a2dd974ee9a81b00fbde7f5Request": Model4dd1dde01a2dd974ee9a81b00fbde7f5Request,
    "Model76f409a451ed135dbde0839b42c66c76Request": Model76f409a451ed135dbde0839b42c66c76Request,
    "Model816747d873ee78401c7116175787b931200Response": Model816747d873ee78401c7116175787b931200Response,
    "ScalingPolicy": ScalingPolicy,
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
