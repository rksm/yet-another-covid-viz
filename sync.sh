#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

rsync -avzP --delete dist/ website:stuff/yet-another-covid-viz/
