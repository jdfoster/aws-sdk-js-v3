import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient.ts";
import { CreateAssessmentReportRequest, CreateAssessmentReportResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateAssessmentReportCommand,
  serializeAws_restJson1CreateAssessmentReportCommand,
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

export type CreateAssessmentReportCommandInput = CreateAssessmentReportRequest;
export type CreateAssessmentReportCommandOutput = CreateAssessmentReportResponse & __MetadataBearer;

/**
 * <p>
 * Creates an assessment report for the specified assessment.
 * </p>
 */
export class CreateAssessmentReportCommand extends $Command<
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAssessmentReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssessmentReportCommandInput, CreateAssessmentReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "CreateAssessmentReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssessmentReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssessmentReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAssessmentReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssessmentReportCommandOutput> {
    return deserializeAws_restJson1CreateAssessmentReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
