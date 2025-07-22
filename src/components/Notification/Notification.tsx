import css from "./Notification.module.css"

interface NotificationProps {
	isOpen: boolean
}

export default function Notification({ isOpen }: NotificationProps) {
	return isOpen && <p className={css.message}>No feedback yet</p>
}
