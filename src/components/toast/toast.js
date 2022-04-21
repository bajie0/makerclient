import toast from "@/components/toast/Toast.vue"
import {
	createApp
} from 'vue'

function showToast(msg, duration = 1000) {
	const toastInstance = createApp(toast,{
		msg
	})
	
	const mountNode = document.createElement('div')
	document.body.appendChild(mountNode)
	toastInstance.mount(mountNode)
	
	setTimeout(() => {
		toastInstance.unmount(mountNode)
		document.body.removeChild(mountNode)
	}, duration)
}
export default showToast