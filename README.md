# Ceratech website sources

## Required

Hugo; on a Mac install using Homebrew: `brew install hugo`.

## Develop

To develop the site with hot reloading run the following command in the root dir: `hugo server`.

## Deploy

To deploy a new version of the site to Github pages run: `./deploy.sh`; this will build the site and place the results in the `public` folder. The public folder is synced to the Github pages repo.