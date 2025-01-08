<script setup lang="ts">
import Chat from './components/Chat.vue'
import Header from './components/Header.vue'
import { onMounted } from 'vue'
import { useUserStore } from './store'

const userStore = useUserStore()

onMounted(() => {
	userStore.initializeState()
})
</script>

<template>
	<div class="app">
		<Header />
		<div class="container">
			<Chat />
		</div>
	</div>
</template>
