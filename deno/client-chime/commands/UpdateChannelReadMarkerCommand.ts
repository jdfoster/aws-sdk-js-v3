import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdateChannelReadMarkerRequest, UpdateChannelReadMarkerResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateChannelReadMarkerCommand,
  serializeAws_restJson1UpdateChannelReadMarkerCommand,
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

export type UpdateChannelReadMarkerCommandInput = UpdateChannelReadMarkerRequest;
export type UpdateChannelReadMarkerCommandOutput = UpdateChannelReadMarkerResponse & __MetadataBearer;

/**
 * <p>Sets the timestamp to the point when a user last read messages in a channel.</p>
 */
export class UpdateChannelReadMarkerCommand extends $Command<
  UpdateChannelReadMarkerCommandInput,
  UpdateChannelReadMarkerCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateChannelReadMarkerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateChannelReadMarkerCommandInput, UpdateChannelReadMarkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateChannelReadMarkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateChannelReadMarkerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateChannelReadMarkerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateChannelReadMarkerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateChannelReadMarkerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateChannelReadMarkerCommandOutput> {
    return deserializeAws_restJson1UpdateChannelReadMarkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
