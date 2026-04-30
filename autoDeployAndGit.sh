#!/usr/bin/env bash
# Build & deploy the blog, then commit source changes to the current branch.
# Usage: ./autoDeployAndGit.sh "your commit message"

set -euo pipefail

if [[ $# -lt 1 || -z "${1// }" ]]; then
  echo "Usage: $0 \"commit message\"" >&2
  exit 1
fi
commit_msg="$1"

HEXO=node_modules/.bin/hexo
if [[ ! -x "$HEXO" ]]; then
  echo "Local hexo not found at $HEXO. Run 'npm install' first." >&2
  exit 1
fi

echo "==========================================="
echo "==== hexo clean && hexo deploy --generate"
echo "==========================================="
"$HEXO" clean
"$HEXO" deploy --generate

echo "==========================================="
echo "==== git add (source-only) / commit / push"
echo "==========================================="
# Stage only source files, never build output. .gitignore covers most of
# this, but be explicit to avoid surprises if the rules ever loosen.
git add \
  source/ \
  themes/next-reloaded \
  scaffolds/ \
  _config.yml \
  package.json \
  package-lock.json \
  .gitignore \
  .gitmodules \
  autoDeployAndGit.sh

if git diff --cached --quiet; then
  echo "No source changes staged; skipping commit/push."
else
  git commit -m "$commit_msg"
  git push
fi

echo "==== FINISH ===="
