import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetKeyPairRequest, GetKeyPairResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetKeyPairCommand,
  serializeAws_json1_1GetKeyPairCommand,
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

export type GetKeyPairCommandInput = GetKeyPairRequest;
export type GetKeyPairCommandOutput = GetKeyPairResult & __MetadataBearer;

/**
 * <p>Returns information about a specific key pair.</p>
 */
export class GetKeyPairCommand extends $Command<
  GetKeyPairCommandInput,
  GetKeyPairCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyPairCommandInput) {
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
  ): Handler<GetKeyPairCommandInput, GetKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyPairResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyPairCommandOutput> {
    return deserializeAws_json1_1GetKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
