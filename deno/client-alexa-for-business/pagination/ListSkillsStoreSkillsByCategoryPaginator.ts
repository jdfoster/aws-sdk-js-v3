import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  ListSkillsStoreSkillsByCategoryCommand,
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...args: any
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSkillsStoreSkillsByCategoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...args: any
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  // @ts-ignore
  return await client.listSkillsStoreSkillsByCategory(input, ...args);
};
export async function* paginateListSkillsStoreSkillsByCategory(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsStoreSkillsByCategoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSkillsStoreSkillsByCategoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
