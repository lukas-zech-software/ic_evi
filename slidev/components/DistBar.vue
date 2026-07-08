<script setup>
defineProps({
  caption: { type: String, default: '' },
  total: { type: Number, default: 165 },
  segments: { type: Array, default: () => [] }, // [{ v, c }]
  dim: { type: Boolean, default: false },
})
</script>

<template>
  <div :style="{ opacity: dim ? 0.66 : 1 }">
    <div class="mb-1" style="color:#625f58;font-size:0.8rem;font-weight:600;letter-spacing:.02em">{{ caption }}</div>
    <div class="flex w-full rounded-md overflow-hidden" style="height:2.4rem">
      <div v-for="(s, i) in segments" :key="i"
           class="flex items-center justify-center text-white"
           style="font-size:0.9rem;font-weight:600"
           :style="{ width: (s.v / total * 100) + '%', background: s.c }">
        <span v-if="s.v / total > 0.055">{{ s.v }}</span>
      </div>
    </div>
  </div>
</template>
