import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { DescribeCompilationJobRequest, DescribeCompilationJobResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1DescribeCompilationJobCommand,
  serializeAws_json1_1DescribeCompilationJobCommand,
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

export type DescribeCompilationJobCommandInput = DescribeCompilationJobRequest;
export type DescribeCompilationJobCommandOutput = DescribeCompilationJobResponse & __MetadataBearer;

/**
 * <p>Returns information about a model compilation job.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
 */
export class DescribeCompilationJobCommand extends $Command<
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCompilationJobCommandInput) {
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
  ): Handler<DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeCompilationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCompilationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCompilationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCompilationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCompilationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCompilationJobCommandOutput> {
    return deserializeAws_json1_1DescribeCompilationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
