<script setup lang="ts">
defineProps({ src: { type: String, default: '' } })
</script>

<template>
	<img class="avatar" :src="src" alt="avatar" width="50" height="50" />
</template>
