<script setup>
defineProps({
  aufwand: { type: String, default: '' },
  kern: { type: String, default: '' },
  kernType: { type: String, default: 'kern' }, // kern | supp | hyg
  reqs: { type: String, default: '' },
  effekt: { type: String, default: '' },
})
const kernColors = {
  kern: { bg: '#e6efed', fg: '#215e5a' },
  supp: { bg: '#e9eef6', fg: '#2f4b7c' },
  hyg: { bg: '#f0ede6', fg: '#625f58' },
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 pt-2 mt-3"
       style="border-top:1px solid #e9e5dd;font-size:0.64rem">
    <span class="rounded-full px-2 py-0.5" style="background:#f0ede6;color:#1c1b1a;font-weight:600">Aufwand · {{ aufwand }}</span>
    <span class="rounded-full px-2 py-0.5" style="font-weight:600"
          :style="{ background: kernColors[kernType].bg, color: kernColors[kernType].fg }">{{ kern }}</span>
    <span style="color:#94918a;font-family:ui-monospace,Menlo,monospace">{{ reqs }}</span>
    <span class="ml-auto" style="color:#4f8a3d;font-weight:700">{{ effekt }}</span>
  </div>
</template>
