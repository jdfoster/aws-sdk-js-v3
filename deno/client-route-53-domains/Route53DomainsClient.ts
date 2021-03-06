import {
  AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  AcceptDomainTransferFromAnotherAwsAccountCommandOutput,
} from "./commands/AcceptDomainTransferFromAnotherAwsAccountCommand.ts";
import {
  CancelDomainTransferToAnotherAwsAccountCommandInput,
  CancelDomainTransferToAnotherAwsAccountCommandOutput,
} from "./commands/CancelDomainTransferToAnotherAwsAccountCommand.ts";
import {
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput,
} from "./commands/CheckDomainAvailabilityCommand.ts";
import {
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
} from "./commands/CheckDomainTransferabilityCommand.ts";
import {
  DeleteTagsForDomainCommandInput,
  DeleteTagsForDomainCommandOutput,
} from "./commands/DeleteTagsForDomainCommand.ts";
import {
  DisableDomainAutoRenewCommandInput,
  DisableDomainAutoRenewCommandOutput,
} from "./commands/DisableDomainAutoRenewCommand.ts";
import {
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput,
} from "./commands/DisableDomainTransferLockCommand.ts";
import {
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
} from "./commands/EnableDomainAutoRenewCommand.ts";
import {
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput,
} from "./commands/EnableDomainTransferLockCommand.ts";
import {
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
} from "./commands/GetContactReachabilityStatusCommand.ts";
import { GetDomainDetailCommandInput, GetDomainDetailCommandOutput } from "./commands/GetDomainDetailCommand.ts";
import {
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput,
} from "./commands/GetDomainSuggestionsCommand.ts";
import { GetOperationDetailCommandInput, GetOperationDetailCommandOutput } from "./commands/GetOperationDetailCommand.ts";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand.ts";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand.ts";
import { ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput } from "./commands/ListTagsForDomainCommand.ts";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand.ts";
import {
  RejectDomainTransferFromAnotherAwsAccountCommandInput,
  RejectDomainTransferFromAnotherAwsAccountCommandOutput,
} from "./commands/RejectDomainTransferFromAnotherAwsAccountCommand.ts";
import { RenewDomainCommandInput, RenewDomainCommandOutput } from "./commands/RenewDomainCommand.ts";
import {
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
} from "./commands/ResendContactReachabilityEmailCommand.ts";
import {
  RetrieveDomainAuthCodeCommandInput,
  RetrieveDomainAuthCodeCommandOutput,
} from "./commands/RetrieveDomainAuthCodeCommand.ts";
import { TransferDomainCommandInput, TransferDomainCommandOutput } from "./commands/TransferDomainCommand.ts";
import {
  TransferDomainToAnotherAwsAccountCommandInput,
  TransferDomainToAnotherAwsAccountCommandOutput,
} from "./commands/TransferDomainToAnotherAwsAccountCommand.ts";
import {
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput,
} from "./commands/UpdateDomainContactCommand.ts";
import {
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput,
} from "./commands/UpdateDomainContactPrivacyCommand.ts";
import {
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
} from "./commands/UpdateDomainNameserversCommand.ts";
import {
  UpdateTagsForDomainCommandInput,
  UpdateTagsForDomainCommandOutput,
} from "./commands/UpdateTagsForDomainCommand.ts";
import { ViewBillingCommandInput, ViewBillingCommandOutput } from "./commands/ViewBillingCommand.ts";
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
  | AcceptDomainTransferFromAnotherAwsAccountCommandInput
  | CancelDomainTransferToAnotherAwsAccountCommandInput
  | CheckDomainAvailabilityCommandInput
  | CheckDomainTransferabilityCommandInput
  | DeleteTagsForDomainCommandInput
  | DisableDomainAutoRenewCommandInput
  | DisableDomainTransferLockCommandInput
  | EnableDomainAutoRenewCommandInput
  | EnableDomainTransferLockCommandInput
  | GetContactReachabilityStatusCommandInput
  | GetDomainDetailCommandInput
  | GetDomainSuggestionsCommandInput
  | GetOperationDetailCommandInput
  | ListDomainsCommandInput
  | ListOperationsCommandInput
  | ListTagsForDomainCommandInput
  | RegisterDomainCommandInput
  | RejectDomainTransferFromAnotherAwsAccountCommandInput
  | RenewDomainCommandInput
  | ResendContactReachabilityEmailCommandInput
  | RetrieveDomainAuthCodeCommandInput
  | TransferDomainCommandInput
  | TransferDomainToAnotherAwsAccountCommandInput
  | UpdateDomainContactCommandInput
  | UpdateDomainContactPrivacyCommandInput
  | UpdateDomainNameserversCommandInput
  | UpdateTagsForDomainCommandInput
  | ViewBillingCommandInput;

export type ServiceOutputTypes =
  | AcceptDomainTransferFromAnotherAwsAccountCommandOutput
  | CancelDomainTransferToAnotherAwsAccountCommandOutput
  | CheckDomainAvailabilityCommandOutput
  | CheckDomainTransferabilityCommandOutput
  | DeleteTagsForDomainCommandOutput
  | DisableDomainAutoRenewCommandOutput
  | DisableDomainTransferLockCommandOutput
  | EnableDomainAutoRenewCommandOutput
  | EnableDomainTransferLockCommandOutput
  | GetContactReachabilityStatusCommandOutput
  | GetDomainDetailCommandOutput
  | GetDomainSuggestionsCommandOutput
  | GetOperationDetailCommandOutput
  | ListDomainsCommandOutput
  | ListOperationsCommandOutput
  | ListTagsForDomainCommandOutput
  | RegisterDomainCommandOutput
  | RejectDomainTransferFromAnotherAwsAccountCommandOutput
  | RenewDomainCommandOutput
  | ResendContactReachabilityEmailCommandOutput
  | RetrieveDomainAuthCodeCommandOutput
  | TransferDomainCommandOutput
  | TransferDomainToAnotherAwsAccountCommandOutput
  | UpdateDomainContactCommandOutput
  | UpdateDomainContactPrivacyCommandOutput
  | UpdateDomainNameserversCommandOutput
  | UpdateTagsForDomainCommandOutput
  | ViewBillingCommandOutput;

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

export type Route53DomainsClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type Route53DomainsClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related operations.</p>
 */
export class Route53DomainsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53DomainsClientResolvedConfig
> {
  readonly config: Route53DomainsClientResolvedConfig;

  constructor(configuration: Route53DomainsClientConfig) {
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
