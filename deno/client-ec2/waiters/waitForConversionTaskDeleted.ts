import { EC2Client } from "../EC2Client.ts";
import {
  DescribeConversionTasksCommand,
  DescribeConversionTasksCommandInput,
} from "../commands/DescribeConversionTasksCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (client: EC2Client, input: DescribeConversionTasksCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeConversionTasksCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.ConversionTasks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "deleted";
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
 *  @param input : the input to DescribeConversionTasksCommand for polling.
 */
export const waitForConversionTaskDeleted = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeConversionTasksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
