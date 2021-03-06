import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import {
  DescribeCompanyNetworkConfigurationRequest,
  DescribeCompanyNetworkConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand,
  serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand,
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

export type DescribeCompanyNetworkConfigurationCommandInput = DescribeCompanyNetworkConfigurationRequest;
export type DescribeCompanyNetworkConfigurationCommandOutput = DescribeCompanyNetworkConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Describes the networking configuration to access the internal websites associated with
 *             the specified fleet.</p>
 */
export class DescribeCompanyNetworkConfigurationCommand extends $Command<
  DescribeCompanyNetworkConfigurationCommandInput,
  DescribeCompanyNetworkConfigurationCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCompanyNetworkConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCompanyNetworkConfigurationCommandInput, DescribeCompanyNetworkConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DescribeCompanyNetworkConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCompanyNetworkConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCompanyNetworkConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCompanyNetworkConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCompanyNetworkConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
