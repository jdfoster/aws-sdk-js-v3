import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient.ts";
import { SendProjectSessionActionRequest, SendProjectSessionActionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SendProjectSessionActionCommand,
  serializeAws_restJson1SendProjectSessionActionCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type SendProjectSessionActionCommandInput = SendProjectSessionActionRequest;
export type SendProjectSessionActionCommandOutput = SendProjectSessionActionResponse & __MetadataBearer;

/**
 * <p>Performs a recipe step within an interactive AWS Glue DataBrew session that's
 *             currently open.</p>
 */
export class SendProjectSessionActionCommand extends $Command<
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
  DataBrewClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendProjectSessionActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendProjectSessionActionCommandInput, SendProjectSessionActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "SendProjectSessionActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendProjectSessionActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendProjectSessionActionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendProjectSessionActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendProjectSessionActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendProjectSessionActionCommandOutput> {
    return deserializeAws_restJson1SendProjectSessionActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
