<script setup>
defineProps({
  label: { type: String, default: '' },
  value: { type: Number, default: 0 },
  max: { type: Number, default: 65 },
})
</script>

<template>
  <div class="grid items-center gap-3 my-1.5" style="grid-template-columns:210px 1fr 46px">
    <span style="color:#1c1b1a;font-size:0.86rem">{{ label }}</span>
    <div class="flex items-center" style="height:1.3rem">
      <div class="flex-1 flex justify-end">
        <span v-if="value < 0" class="rounded"
              :style="{ width: (Math.abs(value) / max * 100) + '%', height: '0.85rem', background: '#c0453f' }"></span>
      </div>
      <div style="width:2px;height:1.3rem;background:#d8d4cc;flex:none"></div>
      <div class="flex-1 flex">
        <span v-if="value >= 0" class="rounded"
              :style="{ width: (Math.abs(value) / max * 100) + '%', height: '0.85rem', background: '#4f8a3d' }"></span>
      </div>
    </div>
    <span class="text-right" style="font-size:0.86rem;font-weight:700"
          :style="{ color: value >= 0 ? '#4f8a3d' : '#c0453f' }">{{ value >= 0 ? '+' : '' }}{{ value }}</span>
  </div>
</template>
