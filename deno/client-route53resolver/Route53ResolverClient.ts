import {
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput,
} from "./commands/AssociateResolverEndpointIpAddressCommand.ts";
import {
  AssociateResolverQueryLogConfigCommandInput,
  AssociateResolverQueryLogConfigCommandOutput,
} from "./commands/AssociateResolverQueryLogConfigCommand.ts";
import {
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput,
} from "./commands/AssociateResolverRuleCommand.ts";
import {
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
} from "./commands/CreateResolverEndpointCommand.ts";
import {
  CreateResolverQueryLogConfigCommandInput,
  CreateResolverQueryLogConfigCommandOutput,
} from "./commands/CreateResolverQueryLogConfigCommand.ts";
import { CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput } from "./commands/CreateResolverRuleCommand.ts";
import {
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput,
} from "./commands/DeleteResolverEndpointCommand.ts";
import {
  DeleteResolverQueryLogConfigCommandInput,
  DeleteResolverQueryLogConfigCommandOutput,
} from "./commands/DeleteResolverQueryLogConfigCommand.ts";
import { DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput } from "./commands/DeleteResolverRuleCommand.ts";
import {
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput,
} from "./commands/DisassociateResolverEndpointIpAddressCommand.ts";
import {
  DisassociateResolverQueryLogConfigCommandInput,
  DisassociateResolverQueryLogConfigCommandOutput,
} from "./commands/DisassociateResolverQueryLogConfigCommand.ts";
import {
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput,
} from "./commands/DisassociateResolverRuleCommand.ts";
import {
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput,
} from "./commands/GetResolverEndpointCommand.ts";
import {
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
} from "./commands/GetResolverQueryLogConfigAssociationCommand.ts";
import {
  GetResolverQueryLogConfigCommandInput,
  GetResolverQueryLogConfigCommandOutput,
} from "./commands/GetResolverQueryLogConfigCommand.ts";
import {
  GetResolverQueryLogConfigPolicyCommandInput,
  GetResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/GetResolverQueryLogConfigPolicyCommand.ts";
import {
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput,
} from "./commands/GetResolverRuleAssociationCommand.ts";
import { GetResolverRuleCommandInput, GetResolverRuleCommandOutput } from "./commands/GetResolverRuleCommand.ts";
import {
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput,
} from "./commands/GetResolverRulePolicyCommand.ts";
import {
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput,
} from "./commands/ListResolverEndpointIpAddressesCommand.ts";
import {
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput,
} from "./commands/ListResolverEndpointsCommand.ts";
import {
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
} from "./commands/ListResolverQueryLogConfigAssociationsCommand.ts";
import {
  ListResolverQueryLogConfigsCommandInput,
  ListResolverQueryLogConfigsCommandOutput,
} from "./commands/ListResolverQueryLogConfigsCommand.ts";
import {
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput,
} from "./commands/ListResolverRuleAssociationsCommand.ts";
import { ListResolverRulesCommandInput, ListResolverRulesCommandOutput } from "./commands/ListResolverRulesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutResolverQueryLogConfigPolicyCommandInput,
  PutResolverQueryLogConfigPolicyCommandOutput,
} from "./commands/PutResolverQueryLogConfigPolicyCommand.ts";
import {
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput,
} from "./commands/PutResolverRulePolicyCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput,
} from "./commands/UpdateResolverEndpointCommand.ts";
import { UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput } from "./commands/UpdateResolverRuleCommand.ts";
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
  | AssociateResolverEndpointIpAddressCommandInput
  | AssociateResolverQueryLogConfigCommandInput
  | AssociateResolverRuleCommandInput
  | CreateResolverEndpointCommandInput
  | CreateResolverQueryLogConfigCommandInput
  | CreateResolverRuleCommandInput
  | DeleteResolverEndpointCommandInput
  | DeleteResolverQueryLogConfigCommandInput
  | DeleteResolverRuleCommandInput
  | DisassociateResolverEndpointIpAddressCommandInput
  | DisassociateResolverQueryLogConfigCommandInput
  | DisassociateResolverRuleCommandInput
  | GetResolverEndpointCommandInput
  | GetResolverQueryLogConfigAssociationCommandInput
  | GetResolverQueryLogConfigCommandInput
  | GetResolverQueryLogConfigPolicyCommandInput
  | GetResolverRuleAssociationCommandInput
  | GetResolverRuleCommandInput
  | GetResolverRulePolicyCommandInput
  | ListResolverEndpointIpAddressesCommandInput
  | ListResolverEndpointsCommandInput
  | ListResolverQueryLogConfigAssociationsCommandInput
  | ListResolverQueryLogConfigsCommandInput
  | ListResolverRuleAssociationsCommandInput
  | ListResolverRulesCommandInput
  | ListTagsForResourceCommandInput
  | PutResolverQueryLogConfigPolicyCommandInput
  | PutResolverRulePolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateResolverEndpointCommandInput
  | UpdateResolverRuleCommandInput;

export type ServiceOutputTypes =
  | AssociateResolverEndpointIpAddressCommandOutput
  | AssociateResolverQueryLogConfigCommandOutput
  | AssociateResolverRuleCommandOutput
  | CreateResolverEndpointCommandOutput
  | CreateResolverQueryLogConfigCommandOutput
  | CreateResolverRuleCommandOutput
  | DeleteResolverEndpointCommandOutput
  | DeleteResolverQueryLogConfigCommandOutput
  | DeleteResolverRuleCommandOutput
  | DisassociateResolverEndpointIpAddressCommandOutput
  | DisassociateResolverQueryLogConfigCommandOutput
  | DisassociateResolverRuleCommandOutput
  | GetResolverEndpointCommandOutput
  | GetResolverQueryLogConfigAssociationCommandOutput
  | GetResolverQueryLogConfigCommandOutput
  | GetResolverQueryLogConfigPolicyCommandOutput
  | GetResolverRuleAssociationCommandOutput
  | GetResolverRuleCommandOutput
  | GetResolverRulePolicyCommandOutput
  | ListResolverEndpointIpAddressesCommandOutput
  | ListResolverEndpointsCommandOutput
  | ListResolverQueryLogConfigAssociationsCommandOutput
  | ListResolverQueryLogConfigsCommandOutput
  | ListResolverRuleAssociationsCommandOutput
  | ListResolverRulesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutResolverQueryLogConfigPolicyCommandOutput
  | PutResolverRulePolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateResolverEndpointCommandOutput
  | UpdateResolverRuleCommandOutput;

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

export type Route53ResolverClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type Route53ResolverClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver.
 * 			By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or ELB load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain names.</p>
 *
 * 		       <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *
 * 		       <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *
 * 		       <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for AWS resources such as EC2 instances or records in a Route 53 private hosted zone.
 * 			For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
 * 			on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>
 *             <b>Conditionally forward queries from a VPC to resolvers on your network</b>
 *          </p>
 *
 * 		       <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
 * 			To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
 * 			(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
 * 			If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
 * 			(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
 * 			Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>Like Amazon VPC, Resolver is regional. In each region where you have VPCs, you can choose whether to forward queries from your VPCs
 * 			to your network (outbound queries), from your network to your VPCs (inbound queries), or both.</p>
 */
export class Route53ResolverClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53ResolverClientResolvedConfig
> {
  readonly config: Route53ResolverClientResolvedConfig;

  constructor(configuration: Route53ResolverClientConfig) {
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
