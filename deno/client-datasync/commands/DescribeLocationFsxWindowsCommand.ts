import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { DescribeLocationFsxWindowsRequest, DescribeLocationFsxWindowsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeLocationFsxWindowsCommand,
  serializeAws_json1_1DescribeLocationFsxWindowsCommand,
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

export type DescribeLocationFsxWindowsCommandInput = DescribeLocationFsxWindowsRequest;
export type DescribeLocationFsxWindowsCommandOutput = DescribeLocationFsxWindowsResponse & __MetadataBearer;

/**
 * <p>Returns metadata, such as the path information about an Amazon FSx for Windows location.</p>
 */
export class DescribeLocationFsxWindowsCommand extends $Command<
  DescribeLocationFsxWindowsCommandInput,
  DescribeLocationFsxWindowsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocationFsxWindowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationFsxWindowsCommandInput, DescribeLocationFsxWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocationFsxWindowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocationFsxWindowsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLocationFsxWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLocationFsxWindowsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocationFsxWindowsCommandOutput> {
    return deserializeAws_json1_1DescribeLocationFsxWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
