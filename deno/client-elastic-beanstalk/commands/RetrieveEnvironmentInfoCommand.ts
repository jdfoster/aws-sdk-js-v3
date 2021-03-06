import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { RetrieveEnvironmentInfoMessage, RetrieveEnvironmentInfoResultMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryRetrieveEnvironmentInfoCommand,
  serializeAws_queryRetrieveEnvironmentInfoCommand,
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

export type RetrieveEnvironmentInfoCommandInput = RetrieveEnvironmentInfoMessage;
export type RetrieveEnvironmentInfoCommandOutput = RetrieveEnvironmentInfoResultMessage & __MetadataBearer;

/**
 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
 *       request.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RequestEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RetrieveEnvironmentInfoCommand extends $Command<
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetrieveEnvironmentInfoCommandInput) {
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
  ): Handler<RetrieveEnvironmentInfoCommandInput, RetrieveEnvironmentInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "RetrieveEnvironmentInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetrieveEnvironmentInfoMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RetrieveEnvironmentInfoResultMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetrieveEnvironmentInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRetrieveEnvironmentInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveEnvironmentInfoCommandOutput> {
    return deserializeAws_queryRetrieveEnvironmentInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
