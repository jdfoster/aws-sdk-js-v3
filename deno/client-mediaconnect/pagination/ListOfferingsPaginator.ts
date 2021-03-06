import { MediaConnect } from "../MediaConnect.ts";
import { MediaConnectClient } from "../MediaConnectClient.ts";
import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand.ts";
import { MediaConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaConnectClient,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaConnect,
  input: ListOfferingsCommandInput,
  ...args: any
): Promise<ListOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.listOfferings(input, ...args);
};
export async function* paginateListOfferings(
  config: MediaConnectPaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOfferingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConnect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConnect | MediaConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
