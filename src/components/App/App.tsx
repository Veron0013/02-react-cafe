import css from "./App.module.css"
import CafeInfo from "../CafeInfo/CafeInfo"
import VoteOption from "../VoteOptions/VoteOptions"
import VoteStats from "../VoteStats/VoteStats"
import Notification from "../Notification/Notification"
import { useState } from "react"
import type { VoteType, Votes } from "../../types/votes"

function App() {
	//interface Votes {
	//	good: number
	//	neutral: number
	//	bad: number
	//}

	const [count, setVotes] = useState<Votes>({
		good: 0,
		neutral: 0,
		bad: 0,
	})

	const handleVote = (type: VoteType): void => {
		setVotes((prev) => ({
			...prev,
			[type]: prev[type] + 1,
		}))
	}

	const resetVotes = (): void => {
		setVotes({
			good: 0,
			neutral: 0,
			bad: 0,
		})
	}

	const totalVotes: number = count.good + count.neutral + count.bad
	const rate: number = (count.good / totalVotes) * 100
	const positiveRate: string = rate > 0 ? rate.toFixed(2) : "0"

	return (
		<div className={css.app}>
			<CafeInfo />
			<VoteOption onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
			<VoteStats votes={count} totalVotes={totalVotes} positiveRate={positiveRate} />
			<Notification isOpen={totalVotes === 0} />
		</div>
	)
}

export default App
