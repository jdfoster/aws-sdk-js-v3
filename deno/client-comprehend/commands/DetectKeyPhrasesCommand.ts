import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { DetectKeyPhrasesRequest, DetectKeyPhrasesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DetectKeyPhrasesCommand,
  serializeAws_json1_1DetectKeyPhrasesCommand,
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

export type DetectKeyPhrasesCommandInput = DetectKeyPhrasesRequest;
export type DetectKeyPhrasesCommandOutput = DetectKeyPhrasesResponse & __MetadataBearer;

/**
 * <p>Detects the key noun phrases found in the text. </p>
 */
export class DetectKeyPhrasesCommand extends $Command<
  DetectKeyPhrasesCommandInput,
  DetectKeyPhrasesCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectKeyPhrasesCommandInput) {
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
  ): Handler<DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectKeyPhrasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectKeyPhrasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectKeyPhrasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectKeyPhrasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectKeyPhrasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectKeyPhrasesCommandOutput> {
    return deserializeAws_json1_1DetectKeyPhrasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
