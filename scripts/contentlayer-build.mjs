import "@contentlayer/utils/effect/Tracing/Enable";
import { getConfig, generateDotpkg, logGenerateInfo } from "@contentlayer/core";
import { provideDummyTracing } from "@contentlayer/utils";
import { NodeFsLive } from "@contentlayer/utils/node";
import { pipe, T } from "@contentlayer/utils/effect";

const program = pipe(
  getConfig({ configPath: "contentlayer.config.ts" }),
  T.chain((config) => generateDotpkg({ config, verbose: Boolean(process.env.CL_VERBOSE) })),
  T.tap(logGenerateInfo),
  provideDummyTracing,
  T.provideSomeLayer(NodeFsLive)
);

T.runPromise(program)
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error("contentlayer build warning (ignored)", err);
    process.exit(0);
  });
