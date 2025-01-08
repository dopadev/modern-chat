<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useChat } from '../firebase'
import Message from './Message.vue'
import sendIcon from '../img/sendIcon.svg'
import { useUserStore } from '../store'

const userStore = useUserStore()

const { messages, sendMessage } = useChat()

const message = ref('')
const send = () => {
	sendMessage(message.value)
	message.value = ''
}

watch(messages, () => {
	userStore.setMessages(messages.value)

	nextTick(() => {
		const messagesContainer = document.querySelector('.messages')
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight
		}
	})
})

onMounted(() => {
	nextTick(() => {
		const messagesContainer = document.querySelector('.messages')
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight
		}
	})
})
</script>

<template>
	<div v-if="userStore.user" class="chat">
		<ul v-if="userStore.messages" class="messages">
			<Message
				v-for="{ id, text, userPhotoURL, userName, userId } in userStore.messages"
				:key="id"
				:name="userName"
				:photo-url="userPhotoURL"
				:sender="userId === userStore.user?.uid"
			>
				{{ text }}
			</Message>
		</ul>

		<div v-else class="loading">
			<h2>Loading...</h2>
		</div>

		<form class="form-control" @submit.prevent="send">
			<input
				v-model="message"
				class="message-input"
				type="text"
				placeholder="Write a message..."
				required
			/>
			<button type="submit" class="message-btn">
				<img :src="sendIcon" alt="send" />
			</button>
		</form>
	</div>

	<div v-else class="not-logged">
		<h2>Sign in to use the app</h2>
	</div>
</template>
