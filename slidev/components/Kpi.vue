<script setup>
defineProps({
  value: { type: [String, Number], default: '' },
  sub: { type: String, default: '' },
  label: { type: String, default: '' },
  ctx: { type: String, default: '' },
  chip: { type: String, default: '' },
  chipType: { type: String, default: 'neutral' },
  color: { type: String, default: '#1c1b1a' },
})
const chipColors = {
  up: { bg: '#eaf3e5', fg: '#4f8a3d' },
  down: { bg: '#f7e7e6', fg: '#c0453f' },
  flat: { bg: '#f0ede6', fg: '#625f58' },
  neutral: { bg: '#e6efed', fg: '#215e5a' },
}
</script>

<template>
  <div class="rounded-xl border px-4 py-3 flex flex-col h-full" style="border-color:#e9e5dd;background:#ffffff">
    <div style="color:#625f58;font-size:0.72rem;font-weight:500">{{ label }}</div>
    <div class="font-serif leading-none mt-1" :style="{ color, fontSize: '2.4rem', fontWeight: 600 }">
      {{ value }}<span v-if="sub" style="font-size:1.2rem;color:#94918a">&nbsp;{{ sub }}</span>
    </div>
    <div class="mt-1" style="color:#94918a;font-size:0.68rem">{{ ctx }}</div>
    <div v-if="chip" class="mt-2 rounded-full px-2 py-0.5"
         style="align-self:flex-start;font-size:0.66rem;font-weight:600"
         :style="{ background: chipColors[chipType].bg, color: chipColors[chipType].fg }">
      {{ chip }}
    </div>
  </div>
</template>
