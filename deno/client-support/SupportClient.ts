import {
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
} from "./commands/AddAttachmentsToSetCommand.ts";
import {
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput,
} from "./commands/AddCommunicationToCaseCommand.ts";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand.ts";
import { DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput } from "./commands/DescribeAttachmentCommand.ts";
import { DescribeCasesCommandInput, DescribeCasesCommandOutput } from "./commands/DescribeCasesCommand.ts";
import {
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "./commands/DescribeCommunicationsCommand.ts";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand.ts";
import {
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
} from "./commands/DescribeSeverityLevelsCommand.ts";
import {
  DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand.ts";
import {
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckResultCommand.ts";
import {
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckSummariesCommand.ts";
import {
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
} from "./commands/DescribeTrustedAdvisorChecksCommand.ts";
import {
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
} from "./commands/RefreshTrustedAdvisorCheckCommand.ts";
import { ResolveCaseCommandInput, ResolveCaseCommandOutput } from "./commands/ResolveCaseCommand.ts";
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
  | AddAttachmentsToSetCommandInput
  | AddCommunicationToCaseCommandInput
  | CreateCaseCommandInput
  | DescribeAttachmentCommandInput
  | DescribeCasesCommandInput
  | DescribeCommunicationsCommandInput
  | DescribeServicesCommandInput
  | DescribeSeverityLevelsCommandInput
  | DescribeTrustedAdvisorCheckRefreshStatusesCommandInput
  | DescribeTrustedAdvisorCheckResultCommandInput
  | DescribeTrustedAdvisorCheckSummariesCommandInput
  | DescribeTrustedAdvisorChecksCommandInput
  | RefreshTrustedAdvisorCheckCommandInput
  | ResolveCaseCommandInput;

export type ServiceOutputTypes =
  | AddAttachmentsToSetCommandOutput
  | AddCommunicationToCaseCommandOutput
  | CreateCaseCommandOutput
  | DescribeAttachmentCommandOutput
  | DescribeCasesCommandOutput
  | DescribeCommunicationsCommandOutput
  | DescribeServicesCommandOutput
  | DescribeSeverityLevelsCommandOutput
  | DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
  | DescribeTrustedAdvisorCheckResultCommandOutput
  | DescribeTrustedAdvisorCheckSummariesCommandOutput
  | DescribeTrustedAdvisorChecksCommandOutput
  | RefreshTrustedAdvisorCheckCommandOutput
  | ResolveCaseCommandOutput;

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

export type SupportClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type SupportClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>AWS Support</fullname>
 *         <p>The AWS Support API reference is intended for programmers who need detailed information
 *             about the AWS Support operations and data types. This service enables you to manage your AWS
 *             Support cases programmatically. It uses HTTP methods that return results in JSON
 *             format.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p>The AWS Support service also exposes a set of <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">AWS Trusted Advisor</a> features. You can
 *             retrieve a list of checks and their descriptions, get check results, specify checks to
 *             refresh, and get the refresh status of checks.</p>
 *         <p>The following list describes the AWS Support case management operations:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>Service names, issue categories, and available severity
 *                         levels. </b>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return AWS service names,
 *                     service codes, service categories, and problem severity levels. You use these
 *                     values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case creation, case details, and case
 *                         resolution.</b> The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations create AWS Support cases, retrieve information
 *                     about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Case communication.</b> The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add
 *                     communications and attachments to AWS Support cases.</p>
 *             </li>
 *          </ul>
 *         <p>The following list describes the operations available from the AWS Support service for
 *             Trusted Advisor:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorChecks</a> returns the list of checks that
 *                     run against your AWS resources.</p>
 *             </li>
 *             <li>
 *                 <p>Using the <code>checkId</code> for a specific check returned by <a>DescribeTrustedAdvisorChecks</a>, you can call <a>DescribeTrustedAdvisorCheckResult</a> to obtain the results for the
 *                     check that you specified.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckSummaries</a> returns summarized
 *                     results for one or more Trusted Advisor checks.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>RefreshTrustedAdvisorCheck</a> requests that Trusted Advisor rerun a
 *                     specified check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> reports the refresh
 *                     status of one or more checks.</p>
 *             </li>
 *          </ul>
 *         <p>For authentication of requests, AWS Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *         <p>See <a href="https://docs.aws.amazon.com/awssupport/latest/user/Welcome.html">About the
 *                 AWS Support API</a> in the <i>AWS Support User Guide</i> for
 *             information about how to use this service to create and manage your support cases, and
 *             how to call Trusted Advisor for results of checks on your resources.</p>
 */
export class SupportClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SupportClientResolvedConfig
> {
  readonly config: SupportClientResolvedConfig;

  constructor(configuration: SupportClientConfig) {
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
