import { AutoScalingClient } from "../AutoScalingClient.ts";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
} from "../commands/DescribeAutoScalingGroupsCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (
  client: AutoScalingClient,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAutoScalingGroupsCommand(input));
    try {
      let returnComparator = () => {
        return result.AutoScalingGroups.length > 0.0;
      };
      if (returnComparator() == false) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.AutoScalingGroups.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAutoScalingGroupsCommand for polling.
 */
export const waitForGroupNotExists = async (
  params: WaiterConfiguration<AutoScalingClient>,
  input: DescribeAutoScalingGroupsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
