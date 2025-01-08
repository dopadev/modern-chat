import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => ({
		user: null as any,
		messages: null as any,
	}),
	actions: {
		setUser(user?: any) {
			if (user) {
				this.user = user
				localStorage.setItem('user', JSON.stringify(user))
			} else {
				this.user = null
				localStorage.removeItem('user')
			}
		},
		setMessages(messages?: any) {
			if (messages) {
				this.messages = messages
				localStorage.setItem('messages', JSON.stringify(messages))
			} else {
				this.messages = null
				localStorage.removeItem('messages')
			}
		},
		initializeState() {
			const savedUser = localStorage.getItem('user')
			const savedMessages = localStorage.getItem('messages')
			if (savedUser && savedMessages) {
				this.user = JSON.parse(savedUser)
				this.messages = JSON.parse(savedMessages)
			}
		},
	},
})
