import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient.ts";
import { ListMedicalVocabulariesRequest, ListMedicalVocabulariesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListMedicalVocabulariesCommand,
  serializeAws_json1_1ListMedicalVocabulariesCommand,
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

export type ListMedicalVocabulariesCommandInput = ListMedicalVocabulariesRequest;
export type ListMedicalVocabulariesCommandOutput = ListMedicalVocabulariesResponse & __MetadataBearer;

/**
 * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a
 *             value in any of the request parameters, returns the entire list of vocabularies.</p>
 */
export class ListMedicalVocabulariesCommand extends $Command<
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMedicalVocabulariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListMedicalVocabulariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMedicalVocabulariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMedicalVocabulariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMedicalVocabulariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMedicalVocabulariesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMedicalVocabulariesCommandOutput> {
    return deserializeAws_json1_1ListMedicalVocabulariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
