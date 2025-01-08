<script setup lang="ts">
import { watch } from 'vue'
import { useAuth, useChat } from '../firebase'
import { useUserStore } from '../store'
import Avatar from './Avatar.vue'

const userStore = useUserStore()
const { user, signOut, signIn } = useAuth()
const { messages } = useChat()

const onSignInClick = async () => {
	try {
		await signIn()
		userStore.setUser(user.value)
		userStore.setMessages(messages.value)
	} catch (error) {
		console.error('Error during sign-in:', error)
	}
}
const onSignOutClick = () => {
	signOut()
	userStore.setUser()
	userStore.setMessages()
}

watch(userStore.user, () => {
	if (!userStore.user) {
		userStore.setUser()
	}
})
</script>

<template>
	<header class="header">
		<div>MODERN CHAT</div>

		<div v-if="userStore.user" class="login">
			<Avatar :src="userStore.user!.photoURL ?? undefined" />
			<button class="btn signOut-btn" @click="onSignOutClick">SIGN OUT</button>
		</div>

		<button v-else class="btn" @click="onSignInClick">SIGN IN</button>
	</header>
</template>
