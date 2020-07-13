import API from './api'
import { ArmType } from './types/ArmType'

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

	async getPanelId(): Promise<number> {
		const systemStatus = await this.api.getState()
		return systemStatus.panelInfo.PanelId
	}

	async getArmType(): Promise<ArmType> {
		const systemStatus = await this.api.getState()
		return systemStatus.systemState.ArmType
	}
}

export default G4S
