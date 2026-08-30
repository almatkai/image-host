/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** IMGBB API Key - Your imgBB API key */
  "apiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `host-image` command */
  export type HostImage = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `host-image` command */
  export type HostImage = {}
}

