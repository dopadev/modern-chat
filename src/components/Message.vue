<script setup lang="ts">
import Avatar from './Avatar.vue'

defineProps({
	name: { type: String, default: '' },
	photoUrl: { type: String, default: '' },
	sender: { type: Boolean, default: false },
})
</script>

<template>
	<li class="message flex" :class="{ 'flex-row-reverse': sender }">
		<Avatar :src="photoUrl" />
		<div class="text-message" :class="sender ? 'mr' : 'ml'">
			<slot />
		</div>
	</li>
</template>
