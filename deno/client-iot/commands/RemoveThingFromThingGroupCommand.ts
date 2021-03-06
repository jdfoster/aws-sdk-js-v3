import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { RemoveThingFromThingGroupRequest, RemoveThingFromThingGroupResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1RemoveThingFromThingGroupCommand,
  serializeAws_restJson1RemoveThingFromThingGroupCommand,
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

export type RemoveThingFromThingGroupCommandInput = RemoveThingFromThingGroupRequest;
export type RemoveThingFromThingGroupCommandOutput = RemoveThingFromThingGroupResponse & __MetadataBearer;

/**
 * <p>Remove the specified thing from the specified group.</p>
 * 		       <p>You must specify either a <code>thingGroupArn</code> or a
 * 			<code>thingGroupName</code> to identify the thing group and
 * 			either a <code>thingArn</code> or a <code>thingName</code> to
 * 			identify the thing to remove from the thing group.
 * 		</p>
 */
export class RemoveThingFromThingGroupCommand extends $Command<
  RemoveThingFromThingGroupCommandInput,
  RemoveThingFromThingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveThingFromThingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveThingFromThingGroupCommandInput, RemoveThingFromThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RemoveThingFromThingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveThingFromThingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveThingFromThingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveThingFromThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveThingFromThingGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveThingFromThingGroupCommandOutput> {
    return deserializeAws_restJson1RemoveThingFromThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
