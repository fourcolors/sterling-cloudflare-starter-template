# !/bin/bash

if [ "$CF_PAGES_BRANCH" == "staging" ]; then
  npm run deploy:staging
elif [ "$CF_PAGES_BRANCH" == "main" ]; then
  npm run deploy:production
fi