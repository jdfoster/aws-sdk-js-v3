import { SageMakerClient } from "../SageMakerClient.ts";
import {
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceCommandInput,
} from "../commands/DescribeNotebookInstanceCommand.ts";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "../../util-waiter/mod.ts";

const checkState = async (
  client: SageMakerClient,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeNotebookInstanceCommand(input));
    try {
      let returnComparator = () => {
        return result.NotebookInstanceStatus;
      };
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.NotebookInstanceStatus;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeNotebookInstanceCommand for polling.
 */
export const waitForNotebookInstanceStopped = async (
  params: WaiterConfiguration<SageMakerClient>,
  input: DescribeNotebookInstanceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
