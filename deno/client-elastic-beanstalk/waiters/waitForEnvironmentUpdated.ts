import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient.ts";
import { DescribeEnvironmentsCommand, DescribeEnvironmentsCommandInput } from "../commands/DescribeEnvironmentsCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (
  client: ElasticBeanstalkClient,
  input: DescribeEnvironmentsCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeEnvironmentsCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Environments);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "Ready";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Environments);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "Updating";
      }
      if (allStringEq_5) {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeEnvironmentsCommand for polling.
 */
export const waitForEnvironmentUpdated = async (
  params: WaiterConfiguration<ElasticBeanstalkClient>,
  input: DescribeEnvironmentsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
