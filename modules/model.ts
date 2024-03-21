import { makeAutoObservable } from 'mobx'

export default class Index {
	count = 0

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

	init() {
		this.count = this.count + 10
	}

	add() {
		this.count = this.count + 1
	}

	off() {
		this.count = 0
	}
}
