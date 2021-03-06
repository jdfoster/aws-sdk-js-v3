import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { DescribePiiEntitiesDetectionJobRequest, DescribePiiEntitiesDetectionJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommand,
  serializeAws_json1_1DescribePiiEntitiesDetectionJobCommand,
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

export type DescribePiiEntitiesDetectionJobCommandInput = DescribePiiEntitiesDetectionJobRequest;
export type DescribePiiEntitiesDetectionJobCommandOutput = DescribePiiEntitiesDetectionJobResponse & __MetadataBearer;

/**
 * <p>Gets the properties associated with a PII entities detection job. For example, you can use
 *       this operation to get the job status.</p>
 */
export class DescribePiiEntitiesDetectionJobCommand extends $Command<
  DescribePiiEntitiesDetectionJobCommandInput,
  DescribePiiEntitiesDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePiiEntitiesDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePiiEntitiesDetectionJobCommandInput, DescribePiiEntitiesDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribePiiEntitiesDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePiiEntitiesDetectionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePiiEntitiesDetectionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePiiEntitiesDetectionJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePiiEntitiesDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePiiEntitiesDetectionJobCommandOutput> {
    return deserializeAws_json1_1DescribePiiEntitiesDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
