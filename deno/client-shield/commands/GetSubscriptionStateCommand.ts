import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { GetSubscriptionStateRequest, GetSubscriptionStateResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetSubscriptionStateCommand,
  serializeAws_json1_1GetSubscriptionStateCommand,
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

export type GetSubscriptionStateCommandInput = GetSubscriptionStateRequest;
export type GetSubscriptionStateCommandOutput = GetSubscriptionStateResponse & __MetadataBearer;

/**
 * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
 */
export class GetSubscriptionStateCommand extends $Command<
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSubscriptionStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "GetSubscriptionStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSubscriptionStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSubscriptionStateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSubscriptionStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSubscriptionStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSubscriptionStateCommandOutput> {
    return deserializeAws_json1_1GetSubscriptionStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
