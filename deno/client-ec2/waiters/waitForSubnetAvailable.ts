import { EC2Client } from "../EC2Client.ts";
import { DescribeSubnetsCommand, DescribeSubnetsCommandInput } from "../commands/DescribeSubnetsCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: EC2Client, input: DescribeSubnetsCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeSubnetsCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Subnets);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeSubnetsCommand for polling.
 */
export const waitForSubnetAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSubnetsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
