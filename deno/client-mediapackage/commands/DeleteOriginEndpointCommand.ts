import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient.ts";
import { DeleteOriginEndpointRequest, DeleteOriginEndpointResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteOriginEndpointCommand,
  serializeAws_restJson1DeleteOriginEndpointCommand,
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

export type DeleteOriginEndpointCommandInput = DeleteOriginEndpointRequest;
export type DeleteOriginEndpointCommandOutput = DeleteOriginEndpointResponse & __MetadataBearer;

/**
 * Deletes an existing OriginEndpoint.
 */
export class DeleteOriginEndpointCommand extends $Command<
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteOriginEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOriginEndpointCommandInput, DeleteOriginEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "DeleteOriginEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOriginEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteOriginEndpointResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteOriginEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteOriginEndpointCommandOutput> {
    return deserializeAws_restJson1DeleteOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
