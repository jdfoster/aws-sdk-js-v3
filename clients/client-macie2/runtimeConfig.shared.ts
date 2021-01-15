import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2020-01-01",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "Macie2",
  urlParser: parseUrl,
};
