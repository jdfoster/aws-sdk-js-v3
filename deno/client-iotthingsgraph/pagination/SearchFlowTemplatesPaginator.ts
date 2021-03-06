import { IoTThingsGraph } from "../IoTThingsGraph.ts";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient.ts";
import {
  SearchFlowTemplatesCommand,
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "../commands/SearchFlowTemplatesCommand.ts";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchFlowTemplatesCommandInput,
  ...args: any
): Promise<SearchFlowTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchFlowTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchFlowTemplatesCommandInput,
  ...args: any
): Promise<SearchFlowTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.searchFlowTemplates(input, ...args);
};
export async function* paginateSearchFlowTemplates(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchFlowTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<SearchFlowTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchFlowTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraph) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
