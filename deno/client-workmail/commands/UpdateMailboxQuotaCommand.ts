import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { UpdateMailboxQuotaRequest, UpdateMailboxQuotaResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateMailboxQuotaCommand,
  serializeAws_json1_1UpdateMailboxQuotaCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type UpdateMailboxQuotaCommandInput = UpdateMailboxQuotaRequest;
export type UpdateMailboxQuotaCommandOutput = UpdateMailboxQuotaResponse & __MetadataBearer;

/**
 * <p>Updates a user's current mailbox quota for a specified organization and user.</p>
 */
export class UpdateMailboxQuotaCommand extends $Command<
  UpdateMailboxQuotaCommandInput,
  UpdateMailboxQuotaCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMailboxQuotaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "UpdateMailboxQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMailboxQuotaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMailboxQuotaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMailboxQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMailboxQuotaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMailboxQuotaCommandOutput> {
    return deserializeAws_json1_1UpdateMailboxQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
