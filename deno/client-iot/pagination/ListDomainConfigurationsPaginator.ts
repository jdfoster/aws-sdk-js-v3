import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListDomainConfigurationsCommand,
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "../commands/ListDomainConfigurationsCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListDomainConfigurationsCommandInput,
  ...args: any
): Promise<ListDomainConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListDomainConfigurationsCommandInput,
  ...args: any
): Promise<ListDomainConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listDomainConfigurations(input, ...args);
};
export async function* paginateListDomainConfigurations(
  config: IoTPaginationConfiguration,
  input: ListDomainConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainConfigurationsCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
