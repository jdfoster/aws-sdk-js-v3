import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { DeletePlatformVersionRequest, DeletePlatformVersionResult } from "../models/models_0.ts";
import {
  deserializeAws_queryDeletePlatformVersionCommand,
  serializeAws_queryDeletePlatformVersionCommand,
} from "../protocols/Aws_query.ts";
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

export type DeletePlatformVersionCommandInput = DeletePlatformVersionRequest;
export type DeletePlatformVersionCommandOutput = DeletePlatformVersionResult & __MetadataBearer;

/**
 * <p>Deletes the specified version of a custom platform.</p>
 */
export class DeletePlatformVersionCommand extends $Command<
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlatformVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePlatformVersionCommandInput, DeletePlatformVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DeletePlatformVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlatformVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePlatformVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlatformVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeletePlatformVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePlatformVersionCommandOutput> {
    return deserializeAws_queryDeletePlatformVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
