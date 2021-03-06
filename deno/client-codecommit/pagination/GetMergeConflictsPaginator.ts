import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  GetMergeConflictsCommand,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
} from "../commands/GetMergeConflictsCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetMergeConflictsCommandInput,
  ...args: any
): Promise<GetMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMergeConflictsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: GetMergeConflictsCommandInput,
  ...args: any
): Promise<GetMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.getMergeConflicts(input, ...args);
};
export async function* paginateGetMergeConflicts(
  config: CodeCommitPaginationConfiguration,
  input: GetMergeConflictsCommandInput,
  ...additionalArguments: any
): Paginator<GetMergeConflictsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMergeConflictsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxConflictFiles"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
