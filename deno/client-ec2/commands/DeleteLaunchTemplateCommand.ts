import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DeleteLaunchTemplateRequest, DeleteLaunchTemplateResult } from "../models/models_1.ts";
import {
  deserializeAws_ec2DeleteLaunchTemplateCommand,
  serializeAws_ec2DeleteLaunchTemplateCommand,
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

export type DeleteLaunchTemplateCommandInput = DeleteLaunchTemplateRequest;
export type DeleteLaunchTemplateCommandOutput = DeleteLaunchTemplateResult & __MetadataBearer;

/**
 * <p>Deletes a launch template. Deleting a launch template deletes all of its versions.</p>
 */
export class DeleteLaunchTemplateCommand extends $Command<
  DeleteLaunchTemplateCommandInput,
  DeleteLaunchTemplateCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLaunchTemplateCommandInput) {
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
  ): Handler<DeleteLaunchTemplateCommandInput, DeleteLaunchTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLaunchTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLaunchTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLaunchTemplateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLaunchTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteLaunchTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLaunchTemplateCommandOutput> {
    return deserializeAws_ec2DeleteLaunchTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
