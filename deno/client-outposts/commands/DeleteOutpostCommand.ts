import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient.ts";
import { DeleteOutpostInput, DeleteOutpostOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteOutpostCommand,
  serializeAws_restJson1DeleteOutpostCommand,
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

export type DeleteOutpostCommandInput = DeleteOutpostInput;
export type DeleteOutpostCommandOutput = DeleteOutpostOutput & __MetadataBearer;

/**
 * <p>Deletes the Outpost.</p>
 */
export class DeleteOutpostCommand extends $Command<
  DeleteOutpostCommandInput,
  DeleteOutpostCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOutpostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOutpostCommandInput, DeleteOutpostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "DeleteOutpostCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOutpostInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteOutpostOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOutpostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteOutpostCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOutpostCommandOutput> {
    return deserializeAws_restJson1DeleteOutpostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
