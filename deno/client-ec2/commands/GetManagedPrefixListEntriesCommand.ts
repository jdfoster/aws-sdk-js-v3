import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetManagedPrefixListEntriesRequest, GetManagedPrefixListEntriesResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2GetManagedPrefixListEntriesCommand,
  serializeAws_ec2GetManagedPrefixListEntriesCommand,
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

export type GetManagedPrefixListEntriesCommandInput = GetManagedPrefixListEntriesRequest;
export type GetManagedPrefixListEntriesCommandOutput = GetManagedPrefixListEntriesResult & __MetadataBearer;

/**
 * <p>Gets information about the entries for a specified managed prefix list.</p>
 */
export class GetManagedPrefixListEntriesCommand extends $Command<
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetManagedPrefixListEntriesCommandInput) {
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
  ): Handler<GetManagedPrefixListEntriesCommandInput, GetManagedPrefixListEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetManagedPrefixListEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetManagedPrefixListEntriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetManagedPrefixListEntriesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetManagedPrefixListEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetManagedPrefixListEntriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetManagedPrefixListEntriesCommandOutput> {
    return deserializeAws_ec2GetManagedPrefixListEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
