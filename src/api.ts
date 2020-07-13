import fetch from 'node-fetch'
import { DisarmError } from './errors/DisarmError'
import { ArmError } from './errors/ArmError'
import { SystemStatus } from './types/SystemStatus'

type CommandOptions = {
	methodToInvoke?: 'Arm' | 'Disarm',
	panelId?: string,
}

class API {
	private readonly BASE_URL = 'https://mit.g4severhome.dk/ESI.API/API/'
	private readonly COMMAND_URL = 'Commands/invokeAPI'
	private readonly SYSTEM_STATUS_URL = 'systemstatus/getState'

	constructor(private readonly username: string, private readonly password: string) {
	}

	async armPanel(panelId: string): Promise<void> {
		const response = await this.invokeCommand({ panelId, methodToInvoke: 'Arm' })
		if (response.status !== 200) throw new ArmError()
	}

	async disarmPanel(panelId: string): Promise<void> {
		const response = await this.invokeCommand({ panelId, methodToInvoke: 'Disarm' })
		if (response.status !== 200) throw new DisarmError()
	}

	async getState(): Promise<SystemStatus> {
		const response = await fetch(`${this.BASE_URL}${this.SYSTEM_STATUS_URL}`, {
			method: 'POST',
			body: JSON.stringify({ email: this.username, password: this.password }),
		})

		const json: string = await response.json()
		return JSON.parse(json) as SystemStatus
	}

	private async invokeCommand(options: CommandOptions = {}) {
		return fetch(`${this.BASE_URL}${this.COMMAND_URL}`, {
			method: 'POST',
			body: JSON.stringify({
				email: this.username,
				password: this.password,
				...options,
			}),
		})
	}
}

export default API
