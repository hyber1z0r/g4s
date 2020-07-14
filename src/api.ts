import fetch from 'node-fetch'
import { DisarmError } from './errors/DisarmError'
import { ArmError } from './errors/ArmError'
import { SystemStatus } from './types/SystemStatus'

type CommandOptions = {
	methodToInvoke?: 'Arm' | 'Disarm',
	panelId?: number,
	partition?: 0 | 2,
}

class API {
	private readonly BASE_URL = 'https://mit.g4severhome.dk/ESI.API/API/'
	private readonly COMMAND_URL = 'Commands/invokeAPI'
	private readonly SYSTEM_STATUS_URL = 'systemstatus/getState'

	constructor(private readonly username: string, private readonly password: string) {
	}

	async armPanel(panelId: number): Promise<void> {
		const response = await this.invokeCommand({ panelId, methodToInvoke: 'Arm' })
		if (response.status !== 200) throw new ArmError()
	}

	async nightArmPanel(panelId: number): Promise<void> {
		const response = await this.invokeCommand({ panelId, methodToInvoke: 'Arm', partition: 2 })
		if (response.status !== 200) throw new ArmError()
	}

	async disarmPanel(panelId: number): Promise<void> {
		const response = await this.invokeCommand({ panelId, methodToInvoke: 'Disarm' })
		if (response.status !== 200) throw new DisarmError()
	}

	async getState(): Promise<SystemStatus> {
		const response = await fetch(`${this.BASE_URL}${this.SYSTEM_STATUS_URL}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: this.username, password: this.password }),
		})

		const systemStatus = await response.json()
		return systemStatus as SystemStatus
	}

	private async invokeCommand(options: CommandOptions = {}) {
		return fetch(`${this.BASE_URL}${this.COMMAND_URL}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.username,
				password: this.password,
				...options,
			}),
		})
	}
}

export default API
