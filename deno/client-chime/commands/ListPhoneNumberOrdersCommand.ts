import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { ListPhoneNumberOrdersRequest, ListPhoneNumberOrdersResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListPhoneNumberOrdersCommand,
  serializeAws_restJson1ListPhoneNumberOrdersCommand,
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

export type ListPhoneNumberOrdersCommandInput = ListPhoneNumberOrdersRequest;
export type ListPhoneNumberOrdersCommandOutput = ListPhoneNumberOrdersResponse & __MetadataBearer;

/**
 * <p>Lists the phone number orders for the administrator's Amazon Chime account.</p>
 */
export class ListPhoneNumberOrdersCommand extends $Command<
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPhoneNumberOrdersCommandInput) {
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
  ): Handler<ListPhoneNumberOrdersCommandInput, ListPhoneNumberOrdersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListPhoneNumberOrdersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPhoneNumberOrdersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPhoneNumberOrdersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPhoneNumberOrdersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPhoneNumberOrdersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPhoneNumberOrdersCommandOutput> {
    return deserializeAws_restJson1ListPhoneNumberOrdersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
