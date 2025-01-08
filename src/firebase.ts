import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import type { User } from 'firebase/auth'
import {
	collection,
	getFirestore,
	QuerySnapshot,
	QueryDocumentSnapshot,
	onSnapshot,
	serverTimestamp,
	CollectionReference,
	addDoc,
	query,
	orderBy,
	limit,
} from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import { computed, onUnmounted, ref } from 'vue'

// Конфигурация Firebase
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_API_KEY,
	authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_APP_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_APP_ID,
}

// Инициализация Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

// Определение коллекции сообщений
const messagesCollection: CollectionReference<DocumentData> = collection(
	firestore,
	'messages',
)
const messagesQuery = query(
	messagesCollection,
	orderBy('createdAt', 'desc'),
	limit(100),
)

// Хук для аутентификации
export function useAuth() {
	const user = ref<User | null>(null)
	const unsubscribe = onAuthStateChanged(auth, (_user: User | null) => {
		user.value = _user
	})
	onUnmounted(unsubscribe)

	const isLogin = computed(() => user.value !== null)

	const signIn = async () => {
		const googleProvider = new GoogleAuthProvider()
		await signInWithPopup(auth, googleProvider)
	}
	const signOutUser = () => {
		signOut(auth)
	}

	return { user, isLogin, signIn, signOut: signOutUser }
}

// Хук для чата
export function useChat() {
	const messages = ref<any[]>([])
	const unsubscribe = onSnapshot(
		messagesQuery,
		(snapshot: QuerySnapshot<DocumentData>) => {
			messages.value = snapshot.docs
				.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
					id: doc.id,
					...doc.data(),
				}))
				.reverse()
		},
	)
	onUnmounted(unsubscribe)

	const { user, isLogin } = useAuth()

	const sendMessage = (text: string) => {
		if (!isLogin.value) return
		const { photoURL, uid, displayName } = user.value || {}
		addDoc(messagesCollection, {
			userName: displayName,
			userId: uid,
			userPhotoURL: photoURL,
			text: text,
			createdAt: serverTimestamp(),
		})
	}

	return { messages, sendMessage }
}
