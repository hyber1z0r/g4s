import API from './api';
import { AlarmState } from './types/AlarmState';
import type { ArmType } from './types/ArmType';
import type { PanelInfo } from './types/PanelInfo';
import type { StateDevice } from './types/StateDevice';

class G4S {
	private readonly api: API;

	constructor(username: string, password: string) {
		this.api = new API(username, password);
	}

	async armPanel(panelId: number): Promise<void> {
		return this.api.armPanel(panelId);
	}

	async nightArmPanel(panelId: number): Promise<void> {
		return this.api.nightArmPanel(panelId);
	}

	async stayArmPanel(panelId: number): Promise<void> {
		return this.api.stayArmPanel(panelId);
	}

	async disarmPanel(panelId: number): Promise<void> {
		return this.api.disarmPanel(panelId);
	}

	async getPanel(): Promise<PanelInfo> {
		const systemStatus = await this.api.getState();
		return systemStatus.panelInfo;
	}

	async getArmType(): Promise<ArmType> {
		const systemStatus = await this.api.getState();
		return systemStatus.panelState.ArmType;
	}

	async getDevices(): Promise<StateDevice[]> {
		const systemStatus = await this.api.getState();
		return systemStatus.stateDevices;
	}

	async isAlarmTriggered(): Promise<boolean> {
		const systemStatus = await this.api.getState();
		return systemStatus.panelState.AlarmState === AlarmState.ALARM_TRIGGERED;
	}
}

export default G4S;
