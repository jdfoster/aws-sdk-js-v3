import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  SearchDashboardsCommand,
  SearchDashboardsCommandInput,
  SearchDashboardsCommandOutput,
} from "../commands/SearchDashboardsCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchDashboardsCommandInput,
  ...args: any
): Promise<SearchDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchDashboardsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: SearchDashboardsCommandInput,
  ...args: any
): Promise<SearchDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.searchDashboards(input, ...args);
};
export async function* paginateSearchDashboards(
  config: QuickSightPaginationConfiguration,
  input: SearchDashboardsCommandInput,
  ...additionalArguments: any
): Paginator<SearchDashboardsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchDashboardsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
