# monorepo-library-demo


## Maintaining the repo

* Use the below commands to maintain and update the dependencies
    * `pnpm outdated --recursive` - View all the outdate dependencies, including the sub packages and other apps
    * `pnpm update --recursive` - Update all dependencies to the latest version in respect to the package configuration
        * Because we use the caret character `^` in our versios, this command will only update the minor & patch versions, never the major
        * If you think updating minor is too risky, use the tilde character `~` instead, this will only update the patch version
    * `pnpm update --recursive --latest` - Update all dependencies (including major version) to latest
    * __Important!__ After you update all your deps, make sure the app still works by doing the following:
        * `npm run api:build`
        * `npm run api:deploy:e2e`
        * `npm run api:test:e2e`
        * `npm run dev:app` - quickly test the app