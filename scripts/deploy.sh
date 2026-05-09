#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-tucabinainsonorizada}"
DEPLOY_USER="${DEPLOY_USER:-admindemo}"
DEPLOY_HOST="${DEPLOY_HOST:-213.165.93.51}"
DEPLOY_BASE="${DEPLOY_BASE:-/var/www/tuwebgratis/sites/${APP_NAME}}"
RELEASE_ID="$(date +%Y%m%d%H%M%S)"
RELEASE_PATH="${DEPLOY_BASE}/releases/${RELEASE_ID}"
CURRENT_PATH="${DEPLOY_BASE}/current"
RELOAD_NGINX="${RELOAD_NGINX:-1}"

SSH_TARGET="${DEPLOY_USER}@${DEPLOY_HOST}"
SSH_OPTS="${SSH_OPTS:-}"
SSH_CONTROL_PATH="${SSH_CONTROL_PATH:-/tmp/twg-${APP_NAME}-%C}"
SSH_BASE_OPTS="${SSH_OPTS} -o ControlMaster=auto -o ControlPersist=10m -o ControlPath=${SSH_CONTROL_PATH}"

start_ssh_master() {
  echo "Opening SSH connection to ${SSH_TARGET}..."
  ssh ${SSH_BASE_OPTS} -MNf "${SSH_TARGET}"
}

close_ssh_master() {
  ssh ${SSH_BASE_OPTS} -O exit "${SSH_TARGET}" >/dev/null 2>&1 || true
}

run_remote() {
  ssh ${SSH_BASE_OPTS} "${SSH_TARGET}" "$1"
}

reload_nginx() {
  if [[ -n "${DEPLOY_SUDO_PASSWORD:-}" ]]; then
    ssh ${SSH_BASE_OPTS} "${SSH_TARGET}" "printf '%s\n' '${DEPLOY_SUDO_PASSWORD}' | sudo -S sh -c 'nginx -t && systemctl reload nginx'"
  else
    ssh -tt ${SSH_BASE_OPTS} "${SSH_TARGET}" "sudo sh -c 'nginx -t && systemctl reload nginx'"
  fi
}

echo "Building ${APP_NAME}..."
npm run build

if [[ ! -d out ]]; then
  echo "Build finished, but ./out was not found." >&2
  exit 1
fi

start_ssh_master
trap close_ssh_master EXIT

echo "Creating release ${RELEASE_ID} on ${SSH_TARGET}..."
run_remote "mkdir -p '${DEPLOY_BASE}/releases' '${RELEASE_PATH}'"

echo "Uploading ./out/ to ${RELEASE_PATH}..."
rsync -az --delete -e "ssh ${SSH_BASE_OPTS}" out/ "${SSH_TARGET}:${RELEASE_PATH}/"

echo "Updating current symlink..."
run_remote "ln -sfn '${RELEASE_PATH}' '${CURRENT_PATH}'"

if [[ "${RELOAD_NGINX}" == "1" ]]; then
  echo "Validating and reloading nginx..."
  reload_nginx
else
  echo "Skipping nginx reload because RELOAD_NGINX=${RELOAD_NGINX}."
fi

echo "Deploy complete: ${CURRENT_PATH} -> ${RELEASE_PATH}"
