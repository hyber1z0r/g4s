import fetch from 'node-fetch'
import { DisarmError } from './errors/DisarmError'
import { ArmError } from './errors/ArmError'

type CommandOptions = {
	methodToInvoke?: 'Arm' | 'Disarm',
	panelId?: string,
}

class API {
	private readonly BASE_URL = 'https://mit.g4severhome.dk/ESI.API/API/'
	private readonly COMMAND_URL = 'Commands/invokeAPI'

	constructor(private readonly username: string, private readonly password: string) {
	}

	async armPanel(panelId: string): Promise<void> {
		const response = await this.invokeCommand({panelId, methodToInvoke: 'Arm'})
		if (response.status !== 200) throw new ArmError();
	}

	async disarmPanel(panelId: string): Promise<void> {
		const response = await this.invokeCommand({panelId, methodToInvoke: 'Disarm'})
		if (response.status !== 200) throw new DisarmError();
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

export default API;
