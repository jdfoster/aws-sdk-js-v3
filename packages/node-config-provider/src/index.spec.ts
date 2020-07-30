import { chain, fromStatic, memoize } from "@aws-sdk/property-provider";

import { fromEnv } from "./fromEnv";
import { fromSharedConfigFiles, SharedConfigInit } from "./fromSharedConfigFiles";
import { loadConfig } from "./index";

jest.mock("./fromEnv");
jest.mock("./fromSharedConfigFiles");
jest.mock("@aws-sdk/property-provider");

describe("loadConfig", () => {
  const configuration: SharedConfigInit = {
    profile: "profile",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("passes fromEnv(), fromSharedConfigFiles() and fromStatic() to chain", () => {
    const mockFromEnvReturn = "mockFromEnvReturn";
    (fromEnv as jest.Mock).mockReturnValueOnce(mockFromEnvReturn);
    const mockFromSharedConfigFilesReturn = "mockFromSharedConfigFilesReturn";
    (fromSharedConfigFiles as jest.Mock).mockReturnValueOnce(mockFromSharedConfigFilesReturn);
    const mockFromStatic = "mockFromStatic";
    (fromStatic as jest.Mock).mockReturnValueOnce(mockFromStatic);
    const envVarName = "AWS_CONFIG_FOO";
    const configKey = "aws_config_foo";
    const defaultValue = "foo-value";
    loadConfig(
      {
        environmentVariableSelector: envVarName,
        configFileSelector: configKey,
        default: defaultValue,
      },
      configuration
    );
    expect(fromEnv).toHaveBeenCalledTimes(1);
    expect(fromEnv).toHaveBeenCalledWith(envVarName);
    expect(fromSharedConfigFiles).toHaveBeenCalledTimes(1);
    expect(fromSharedConfigFiles).toHaveBeenCalledWith(configKey, configuration);
    expect(fromStatic).toHaveBeenCalledTimes(1);
    expect(fromStatic).toHaveBeenCalledWith(defaultValue);
    expect(chain).toHaveBeenCalledTimes(1);
    expect(chain).toHaveBeenCalledWith(mockFromEnvReturn, mockFromSharedConfigFilesReturn, mockFromStatic);
  });

  it("passes output of chain to memoize", () => {
    const mockChainReturn = "mockChainReturn";
    (chain as jest.Mock).mockReturnValueOnce(mockChainReturn);
    loadConfig({} as any);
    expect(chain).toHaveBeenCalledTimes(1);
    expect(memoize).toHaveBeenCalledTimes(1);
    expect(memoize).toHaveBeenCalledWith(mockChainReturn);
  });

  it("returns output memoize", () => {
    const mockMemoizeReturn = "mockMemoizeReturn";
    (memoize as jest.Mock).mockReturnValueOnce(mockMemoizeReturn);
    expect(loadConfig({} as any)).toEqual(mockMemoizeReturn);
  });
});
