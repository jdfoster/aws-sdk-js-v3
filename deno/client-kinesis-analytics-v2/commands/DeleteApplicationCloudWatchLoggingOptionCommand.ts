import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client.ts";
import {
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand,
  serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand,
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

export type DeleteApplicationCloudWatchLoggingOptionCommandInput = DeleteApplicationCloudWatchLoggingOptionRequest;
export type DeleteApplicationCloudWatchLoggingOptionCommandOutput = DeleteApplicationCloudWatchLoggingOptionResponse &
  __MetadataBearer;

/**
 * <p>Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application. </p>
 */
export class DeleteApplicationCloudWatchLoggingOptionCommand extends $Command<
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationCloudWatchLoggingOptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteApplicationCloudWatchLoggingOptionCommandInput,
    DeleteApplicationCloudWatchLoggingOptionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DeleteApplicationCloudWatchLoggingOptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationCloudWatchLoggingOptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationCloudWatchLoggingOptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
