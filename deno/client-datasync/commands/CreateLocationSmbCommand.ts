import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { CreateLocationSmbRequest, CreateLocationSmbResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateLocationSmbCommand,
  serializeAws_json1_1CreateLocationSmbCommand,
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

export type CreateLocationSmbCommandInput = CreateLocationSmbRequest;
export type CreateLocationSmbCommandOutput = CreateLocationSmbResponse & __MetadataBearer;

/**
 * <p>Defines a file system on a Server Message Block (SMB) server that can be read from or
 *       written to.</p>
 */
export class CreateLocationSmbCommand extends $Command<
  CreateLocationSmbCommandInput,
  CreateLocationSmbCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocationSmbCommandInput) {
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
  ): Handler<CreateLocationSmbCommandInput, CreateLocationSmbCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationSmbCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationSmbRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocationSmbResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLocationSmbCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationSmbCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationSmbCommandOutput> {
    return deserializeAws_json1_1CreateLocationSmbCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
