import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  GetTransitGatewayPrefixListReferencesRequest,
  GetTransitGatewayPrefixListReferencesResult,
} from "../models/models_4.ts";
import {
  deserializeAws_ec2GetTransitGatewayPrefixListReferencesCommand,
  serializeAws_ec2GetTransitGatewayPrefixListReferencesCommand,
} from "../protocols/Aws_ec2.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type GetTransitGatewayPrefixListReferencesCommandInput = GetTransitGatewayPrefixListReferencesRequest;
export type GetTransitGatewayPrefixListReferencesCommandOutput = GetTransitGatewayPrefixListReferencesResult &
  __MetadataBearer;

/**
 * <p>Gets information about the prefix list references in a specified transit gateway route table.</p>
 */
export class GetTransitGatewayPrefixListReferencesCommand extends $Command<
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayPrefixListReferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTransitGatewayPrefixListReferencesCommandInput, GetTransitGatewayPrefixListReferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayPrefixListReferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayPrefixListReferencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayPrefixListReferencesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayPrefixListReferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetTransitGatewayPrefixListReferencesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayPrefixListReferencesCommandOutput> {
    return deserializeAws_ec2GetTransitGatewayPrefixListReferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
