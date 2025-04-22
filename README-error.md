# Reproducible error

For https://github.com/vercel/turborepo/issues/10353.

**Note**: read the content of `apps/web/next.config.js`

Pick a profile (in `~/.aws/config`), and set it in `apps/infra/sst.config.ts` (currently "test").

```
pnpm install

# see the error
turbo run deploy

# confirm it works in sst (note, we force an error anyway)
pnpm run -F infra deploy
```

