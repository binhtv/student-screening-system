export interface Exam {
	_id: string,
	question: {
		title: string,
		question: string,
		answers: string[]
	}[],
	studentEmail: string,
	token: string,
	status: string,
	duration: number,
	createdAt: Date,
	updatedAt: Date
}