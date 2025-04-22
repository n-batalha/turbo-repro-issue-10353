// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

const region = "eu-west-1";

export default $config({
  app(input) {
    let profile = "test";

    return {
      name: "test-sst-with-turbo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          version: "6.75.0",
          profile,
          region,
        },
      },
    };
  },
  async run() {
    const nextjs = new sst.aws.Nextjs("Web", {
      path: "./../web",
      // buildCommand: "pnpm exec open-next build",
      warm: 0,
      environment: {
        SST_ENV_FOR_TEST: "Hello",
      },
      dev: {
        command: "turbo dev --filter=web...",
        url: "http://localhost:3000/",
      },
    });

    return {
      nextjsUrl: nextjs.url,
    };
  },
});
