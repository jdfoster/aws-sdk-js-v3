import { MediaLiveClient } from "../MediaLiveClient.ts";
import { DescribeChannelCommand, DescribeChannelCommandInput } from "../commands/DescribeChannelCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: MediaLiveClient, input: DescribeChannelCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeChannelCommand(input));
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.State;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a channel has been deleted
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeChannelCommand for polling.
 */
export const waitForChannelDeleted = async (
  params: WaiterConfiguration<MediaLiveClient>,
  input: DescribeChannelCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
