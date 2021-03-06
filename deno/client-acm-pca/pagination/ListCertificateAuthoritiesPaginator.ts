import { ACMPCA } from "../ACMPCA.ts";
import { ACMPCAClient } from "../ACMPCAClient.ts";
import {
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "../commands/ListCertificateAuthoritiesCommand.ts";
import { ACMPCAPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ACMPCAClient,
  input: ListCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificateAuthoritiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ACMPCA,
  input: ListCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.listCertificateAuthorities(input, ...args);
};
export async function* paginateListCertificateAuthorities(
  config: ACMPCAPaginationConfiguration,
  input: ListCertificateAuthoritiesCommandInput,
  ...additionalArguments: any
): Paginator<ListCertificateAuthoritiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificateAuthoritiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ACMPCA) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMPCAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACMPCA | ACMPCAClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
