<script setup>
defineProps({
  label: { type: String, default: '' },
  accent: { type: String, default: '#215e5a' },
})
</script>

<template>
  <div class="mb-2.5">
    <div style="font-size:0.58rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;margin-bottom:2px"
         :style="{ color: accent }">{{ label }}</div>
    <div style="color:#3a3833"><slot /></div>
  </div>
</template>
