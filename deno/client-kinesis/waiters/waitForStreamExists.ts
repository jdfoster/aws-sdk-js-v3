import { KinesisClient } from "../KinesisClient.ts";
import { DescribeStreamCommand, DescribeStreamCommandInput } from "../commands/DescribeStreamCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: KinesisClient, input: DescribeStreamCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeStreamCommand(input));
    try {
      let returnComparator = () => {
        return result.StreamDescription.StreamStatus;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeStreamCommand for polling.
 */
export const waitForStreamExists = async (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
