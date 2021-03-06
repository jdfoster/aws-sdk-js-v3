import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  ListMLTransformsCommand,
  ListMLTransformsCommandInput,
  ListMLTransformsCommandOutput,
} from "../commands/ListMLTransformsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: ListMLTransformsCommandInput,
  ...args: any
): Promise<ListMLTransformsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMLTransformsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: ListMLTransformsCommandInput,
  ...args: any
): Promise<ListMLTransformsCommandOutput> => {
  // @ts-ignore
  return await client.listMLTransforms(input, ...args);
};
export async function* paginateListMLTransforms(
  config: GluePaginationConfiguration,
  input: ListMLTransformsCommandInput,
  ...additionalArguments: any
): Paginator<ListMLTransformsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMLTransformsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
