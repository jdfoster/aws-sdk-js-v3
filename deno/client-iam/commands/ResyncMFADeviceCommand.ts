import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ResyncMFADeviceRequest } from "../models/models_0.ts";
import {
  deserializeAws_queryResyncMFADeviceCommand,
  serializeAws_queryResyncMFADeviceCommand,
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

export type ResyncMFADeviceCommandInput = ResyncMFADeviceRequest;
export type ResyncMFADeviceCommandOutput = __MetadataBearer;

/**
 * <p>Synchronizes the specified MFA device with its IAM resource object on the AWS
 *          servers.</p>
 *          <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA
 *             Device</a> in the <i>IAM User Guide</i>.</p>
 */
export class ResyncMFADeviceCommand extends $Command<
  ResyncMFADeviceCommandInput,
  ResyncMFADeviceCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResyncMFADeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ResyncMFADeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResyncMFADeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResyncMFADeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResyncMFADeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResyncMFADeviceCommandOutput> {
    return deserializeAws_queryResyncMFADeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
