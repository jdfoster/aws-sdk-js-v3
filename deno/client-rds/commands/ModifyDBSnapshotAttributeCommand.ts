import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { ModifyDBSnapshotAttributeMessage, ModifyDBSnapshotAttributeResult } from "../models/models_1.ts";
import {
  deserializeAws_queryModifyDBSnapshotAttributeCommand,
  serializeAws_queryModifyDBSnapshotAttributeCommand,
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

export type ModifyDBSnapshotAttributeCommandInput = ModifyDBSnapshotAttributeMessage;
export type ModifyDBSnapshotAttributeCommandOutput = ModifyDBSnapshotAttributeResult & __MetadataBearer;

/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p>
 *          <p>To share a manual DB snapshot with other AWS accounts, specify <code>restore</code>
 *             as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
 *             a list of IDs of the AWS accounts that are authorized to restore the manual DB snapshot.
 *             Uses the value <code>all</code> to make the manual DB snapshot public, which means it
 *             can be copied or restored by all AWS accounts.</p>
 *         <note>
 *             <p>Don't add the <code>all</code> value for any manual DB snapshots that
 *                 contain private information that you don't want available to all AWS
 *                 accounts.</p>
 *         </note>
 *         <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a
 *             list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You
 *             can't use <code>all</code> as a value for that parameter in this case.</p>
 *          <p>To view which AWS accounts have access to copy or restore a manual DB snapshot, or
 *             whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API action. The accounts are returned as
 *             values for the <code>restore</code> attribute.</p>
 */
export class ModifyDBSnapshotAttributeCommand extends $Command<
  ModifyDBSnapshotAttributeCommandInput,
  ModifyDBSnapshotAttributeCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBSnapshotAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBSnapshotAttributeCommandInput, ModifyDBSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBSnapshotAttributeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBSnapshotAttributeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBSnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBSnapshotAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBSnapshotAttributeCommandOutput> {
    return deserializeAws_queryModifyDBSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
