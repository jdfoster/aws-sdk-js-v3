import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient.ts";
import { DescribeCampaignRequest, DescribeCampaignResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeCampaignCommand,
  serializeAws_json1_1DescribeCampaignCommand,
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

export type DescribeCampaignCommandInput = DescribeCampaignRequest;
export type DescribeCampaignCommandOutput = DescribeCampaignResponse & __MetadataBearer;

/**
 * <p>Describes the given campaign, including its status.</p>
 *          <p>A campaign can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the
 *       <code>failureReason</code> key, which describes why.</p>
 *          <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export class DescribeCampaignCommand extends $Command<
  DescribeCampaignCommandInput,
  DescribeCampaignCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCampaignCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCampaignCommandInput, DescribeCampaignCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DescribeCampaignCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCampaignRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCampaignResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCampaignCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCampaignCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCampaignCommandOutput> {
    return deserializeAws_json1_1DescribeCampaignCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
