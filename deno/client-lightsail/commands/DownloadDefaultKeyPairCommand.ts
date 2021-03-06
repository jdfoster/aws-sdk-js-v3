import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { DownloadDefaultKeyPairRequest, DownloadDefaultKeyPairResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DownloadDefaultKeyPairCommand,
  serializeAws_json1_1DownloadDefaultKeyPairCommand,
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

export type DownloadDefaultKeyPairCommandInput = DownloadDefaultKeyPairRequest;
export type DownloadDefaultKeyPairCommandOutput = DownloadDefaultKeyPairResult & __MetadataBearer;

/**
 * <p>Downloads the default SSH key pair from the user's account.</p>
 */
export class DownloadDefaultKeyPairCommand extends $Command<
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DownloadDefaultKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DownloadDefaultKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DownloadDefaultKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DownloadDefaultKeyPairResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DownloadDefaultKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DownloadDefaultKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DownloadDefaultKeyPairCommandOutput> {
    return deserializeAws_json1_1DownloadDefaultKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
