import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand.ts";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand.ts";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand.ts";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand.ts";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand.ts";
import { DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput } from "./commands/DetectAnomaliesCommand.ts";
import { ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput } from "./commands/ListDatasetEntriesCommand.ts";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand.ts";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand.ts";
import { StartModelCommandInput, StartModelCommandOutput } from "./commands/StartModelCommand.ts";
import { StopModelCommandInput, StopModelCommandOutput } from "./commands/StopModelCommand.ts";
import {
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "./commands/UpdateDatasetEntriesCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateDatasetCommandInput
  | CreateModelCommandInput
  | CreateProjectCommandInput
  | DeleteDatasetCommandInput
  | DeleteModelCommandInput
  | DeleteProjectCommandInput
  | DescribeDatasetCommandInput
  | DescribeModelCommandInput
  | DescribeProjectCommandInput
  | DetectAnomaliesCommandInput
  | ListDatasetEntriesCommandInput
  | ListModelsCommandInput
  | ListProjectsCommandInput
  | StartModelCommandInput
  | StopModelCommandInput
  | UpdateDatasetEntriesCommandInput;

export type ServiceOutputTypes =
  | CreateDatasetCommandOutput
  | CreateModelCommandOutput
  | CreateProjectCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteModelCommandOutput
  | DeleteProjectCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeModelCommandOutput
  | DescribeProjectCommandOutput
  | DetectAnomaliesCommandOutput
  | ListDatasetEntriesCommandOutput
  | ListModelsCommandOutput
  | ListProjectsCommandOutput
  | StartModelCommandOutput
  | StopModelCommandOutput
  | UpdateDatasetEntriesCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type LookoutVisionClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type LookoutVisionClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>This is the Amazon Lookout for Vision API Reference. It provides descriptions of actions,
 *       data types, common parameters, and common errors.</p>
 *          <p>Amazon Lookout for Vision enables you to find visual defects in industrial products,
 *          accurately and at scale. It uses computer vision to identify missing components in an industrial product,
 *          damage to vehicles or structures, irregularities in production lines, and even minuscule defects in
 *          silicon wafers — or any other physical item where quality is important such as a missing capacitor
 *          on printed circuit boards.</p>
 */
export class LookoutVisionClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LookoutVisionClientResolvedConfig
> {
  readonly config: LookoutVisionClientResolvedConfig;

  constructor(configuration: LookoutVisionClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveHostHeaderConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
