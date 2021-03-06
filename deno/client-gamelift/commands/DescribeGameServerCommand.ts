import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DescribeGameServerInput, DescribeGameServerOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeGameServerCommand,
  serializeAws_json1_1DescribeGameServerCommand,
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

export type DescribeGameServerCommandInput = DescribeGameServerInput;
export type DescribeGameServerCommandOutput = DescribeGameServerOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information for a registered game server. Information includes game server
 *             status, health check info, and the instance that the game server is running on. </p>
 *         <p>To retrieve game server information, specify the game server ID. If successful, the
 *             requested game server object is returned. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>RegisterGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ClaimGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeregisterGameServer</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeGameServerCommand extends $Command<
  DescribeGameServerCommandInput,
  DescribeGameServerCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGameServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGameServerCommandInput, DescribeGameServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameServerInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameServerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGameServerCommandOutput> {
    return deserializeAws_json1_1DescribeGameServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
