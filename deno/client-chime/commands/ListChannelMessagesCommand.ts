import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListChannelMessagesRequest, ListChannelMessagesResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListChannelMessagesCommand,
  serializeAws_restJson1ListChannelMessagesCommand,
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

export type ListChannelMessagesCommandInput = ListChannelMessagesRequest;
export type ListChannelMessagesCommandOutput = ListChannelMessagesResponse & __MetadataBearer;

/**
 * <p>List all the messages in a channel. Returns a paginated list of <code>ChannelMessages</code>.
 *            Sorted in descending order by default, based on the creation timestamp.</p>
 *          <note>
 *             <p>Redacted messages appear in the results as empty, since they are only redacted, not deleted.
 *            Deleted messages do not appear in the results. This action always returns the latest version of an edited message.</p>
 *          </note>
 */
export class ListChannelMessagesCommand extends $Command<
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChannelMessagesCommandInput) {
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
  ): Handler<ListChannelMessagesCommandInput, ListChannelMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListChannelMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChannelMessagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListChannelMessagesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChannelMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListChannelMessagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChannelMessagesCommandOutput> {
    return deserializeAws_restJson1ListChannelMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
