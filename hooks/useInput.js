import { useState } from "react"

export const useInput = (initialText) => {
	const [text, setText] = useState(initialText)

	const setTextModified = (event) => {
		setText(prev => prev = event.target.value)
	}

	return [text, setTextModified]
}
