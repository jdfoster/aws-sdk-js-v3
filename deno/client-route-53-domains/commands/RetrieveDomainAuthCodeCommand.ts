import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient.ts";
import { RetrieveDomainAuthCodeRequest, RetrieveDomainAuthCodeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RetrieveDomainAuthCodeCommand,
  serializeAws_json1_1RetrieveDomainAuthCodeCommand,
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

export type RetrieveDomainAuthCodeCommandInput = RetrieveDomainAuthCodeRequest;
export type RetrieveDomainAuthCodeCommandOutput = RetrieveDomainAuthCodeResponse & __MetadataBearer;

/**
 * <p>This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.</p>
 */
export class RetrieveDomainAuthCodeCommand extends $Command<
  RetrieveDomainAuthCodeCommandInput,
  RetrieveDomainAuthCodeCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetrieveDomainAuthCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RetrieveDomainAuthCodeCommandInput, RetrieveDomainAuthCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53DomainsClient";
    const commandName = "RetrieveDomainAuthCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetrieveDomainAuthCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RetrieveDomainAuthCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetrieveDomainAuthCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetrieveDomainAuthCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveDomainAuthCodeCommandOutput> {
    return deserializeAws_json1_1RetrieveDomainAuthCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
