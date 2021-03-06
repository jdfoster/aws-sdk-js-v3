import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient.ts";
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeIndexFieldsCommand,
  serializeAws_queryDescribeIndexFieldsCommand,
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

export type DescribeIndexFieldsCommandInput = DescribeIndexFieldsRequest;
export type DescribeIndexFieldsCommandOutput = DescribeIndexFieldsResponse & __MetadataBearer;

/**
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DescribeIndexFieldsCommand extends $Command<
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIndexFieldsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeIndexFieldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIndexFieldsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIndexFieldsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIndexFieldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeIndexFieldsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIndexFieldsCommandOutput> {
    return deserializeAws_queryDescribeIndexFieldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
