import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient.ts";
import { GetBootstrapBrokersRequest, GetBootstrapBrokersResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetBootstrapBrokersCommand,
  serializeAws_restJson1GetBootstrapBrokersCommand,
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

export type GetBootstrapBrokersCommandInput = GetBootstrapBrokersRequest;
export type GetBootstrapBrokersCommandOutput = GetBootstrapBrokersResponse & __MetadataBearer;

/**
 * <p>A list of brokers that a client application can use to bootstrap.</p>
 */
export class GetBootstrapBrokersCommand extends $Command<
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBootstrapBrokersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBootstrapBrokersCommandInput, GetBootstrapBrokersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "GetBootstrapBrokersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBootstrapBrokersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBootstrapBrokersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBootstrapBrokersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBootstrapBrokersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBootstrapBrokersCommandOutput> {
    return deserializeAws_restJson1GetBootstrapBrokersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
