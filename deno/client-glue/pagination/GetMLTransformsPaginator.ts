import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  GetMLTransformsCommand,
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
} from "../commands/GetMLTransformsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetMLTransformsCommandInput,
  ...args: any
): Promise<GetMLTransformsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMLTransformsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetMLTransformsCommandInput,
  ...args: any
): Promise<GetMLTransformsCommandOutput> => {
  // @ts-ignore
  return await client.getMLTransforms(input, ...args);
};
export async function* paginateGetMLTransforms(
  config: GluePaginationConfiguration,
  input: GetMLTransformsCommandInput,
  ...additionalArguments: any
): Paginator<GetMLTransformsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMLTransformsCommandOutput;
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
