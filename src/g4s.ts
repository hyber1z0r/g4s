import API from './api'

class G4S {
	private readonly api: API

	constructor(username: string, password: string) {
		this.api = new API(username, password)
	}

	async armPanel(panelId: string): Promise<void> {
		return this.api.armPanel(panelId)
	}

	async disarmPanel(panelId: string): Promise<void> {
		return this.api.disarmPanel(panelId)
	}
}

export default G4S
