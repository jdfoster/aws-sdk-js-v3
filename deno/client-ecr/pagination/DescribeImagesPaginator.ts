import { ECR } from "../ECR.ts";
import { ECRClient } from "../ECRClient.ts";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand.ts";
import { ECRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRClient,
  input: DescribeImagesCommandInput,
  ...args: any
): Promise<DescribeImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECR,
  input: DescribeImagesCommandInput,
  ...args: any
): Promise<DescribeImagesCommandOutput> => {
  // @ts-ignore
  return await client.describeImages(input, ...args);
};
export async function* paginateDescribeImages(
  config: ECRPaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
