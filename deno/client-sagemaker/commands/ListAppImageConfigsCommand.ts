import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListAppImageConfigsRequest, ListAppImageConfigsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListAppImageConfigsCommand,
  serializeAws_json1_1ListAppImageConfigsCommand,
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

export type ListAppImageConfigsCommandInput = ListAppImageConfigsRequest;
export type ListAppImageConfigsCommandOutput = ListAppImageConfigsResponse & __MetadataBearer;

/**
 * <p>Lists the AppImageConfigs in your account and their properties. The list can be
 *         filtered by creation time or modified time, and whether the AppImageConfig name contains
 *         a specified string.</p>
 */
export class ListAppImageConfigsCommand extends $Command<
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppImageConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppImageConfigsCommandInput, ListAppImageConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListAppImageConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppImageConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppImageConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppImageConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAppImageConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppImageConfigsCommandOutput> {
    return deserializeAws_json1_1ListAppImageConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
