import { execSync } from "child_process"

/**
 *
 * @param {string} command
 * @param {{cwd?: string}} options
 * @returns
 */
const run = (command, { cwd } = {}) => {
  return execSync(command, {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      TAURI_PRIVATE_KEY: process.env.TAURI_PRIVATE_KEY,
      TAURI_KEY_PASSWORD: process.env.TAURI_KEY_PASSWORD,
      APPLE_CERTIFICATE: process.env.APPLE_CERTIFICATE,
      APPLE_CERTIFICATE_PASSWORD: process.env.APPLE_CERTIFICATE_PASSWORD,
      APPLE_ID: process.env.APPLE_ID,
      APPLE_PASSWORD: process.env.APPLE_PASSWORD,
      APPLE_TEAM_ID: process.env.APPLE_TEAM_ID,
      APPLE_SIGNING_IDENTITY: process.env.APPLE_SIGNING_IDENTITY,
    },
  })
}

run(`pnpm tauri build`)
