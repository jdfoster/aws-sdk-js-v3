import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient.ts";
import { AttachLoadBalancerTargetGroupsResultType, AttachLoadBalancerTargetGroupsType } from "../models/models_0.ts";
import {
  deserializeAws_queryAttachLoadBalancerTargetGroupsCommand,
  serializeAws_queryAttachLoadBalancerTargetGroupsCommand,
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

export type AttachLoadBalancerTargetGroupsCommandInput = AttachLoadBalancerTargetGroupsType;
export type AttachLoadBalancerTargetGroupsCommandOutput = AttachLoadBalancerTargetGroupsResultType & __MetadataBearer;

/**
 * <p>Attaches one or more target groups to the specified Auto Scaling group.</p>
 *         <p>This operation is used with the following load balancer types: </p>
 *         <ul>
 *             <li>
 *                 <p> Application Load Balancer - Operates at the application layer (layer 7) and
 *                     supports HTTP and HTTPS. </p>
 *             </li>
 *             <li>
 *                 <p> Network Load Balancer - Operates at the transport layer (layer 4) and
 *                     supports TCP, TLS, and UDP. </p>
 *             </li>
 *             <li>
 *                 <p> Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *         <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from
 *             the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 */
export class AttachLoadBalancerTargetGroupsCommand extends $Command<
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachLoadBalancerTargetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachLoadBalancerTargetGroupsCommandInput, AttachLoadBalancerTargetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachLoadBalancerTargetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachLoadBalancerTargetGroupsType.filterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancerTargetGroupsResultType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AttachLoadBalancerTargetGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAttachLoadBalancerTargetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachLoadBalancerTargetGroupsCommandOutput> {
    return deserializeAws_queryAttachLoadBalancerTargetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
