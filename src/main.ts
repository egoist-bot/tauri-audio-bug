import { dialog } from "@tauri-apps/api"
import { invoke } from "@tauri-apps/api/tauri"

let greetInputEl: HTMLInputElement | null
let greetMsgEl: HTMLElement | null

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    })
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input")
  greetMsgEl = document.querySelector("#greet-msg")
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault()
    greet()
  })
})

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(() => {
    dialog.message("success")
  })
  .catch((error) => {
    dialog.message(error.message)
  })
