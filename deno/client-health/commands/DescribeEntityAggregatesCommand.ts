import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient.ts";
import { DescribeEntityAggregatesRequest, DescribeEntityAggregatesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEntityAggregatesCommand,
  serializeAws_json1_1DescribeEntityAggregatesCommand,
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

export type DescribeEntityAggregatesCommandInput = DescribeEntityAggregatesRequest;
export type DescribeEntityAggregatesCommandOutput = DescribeEntityAggregatesResponse & __MetadataBearer;

/**
 * <p>Returns the number of entities that are affected by each of the specified events. If no
 *          events are specified, the counts of all affected entities are returned.</p>
 */
export class DescribeEntityAggregatesCommand extends $Command<
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput,
  HealthClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEntityAggregatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEntityAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEntityAggregatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEntityAggregatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEntityAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEntityAggregatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEntityAggregatesCommandOutput> {
    return deserializeAws_json1_1DescribeEntityAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
