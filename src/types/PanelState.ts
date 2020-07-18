import { ArmType } from './ArmType'

export interface PanelState {
	ArmType: ArmType;
	ArmTypeChangedTime: Date;
	ArmForcedState: number;
	ArmDelayedState: number;
	AlarmState: number;
	AlarmStateTime?: any;
	Partition: number;
	DeviceName?: any;
	ExitDelayArmInProcess: boolean;
	EntryDelayArmInProcess: boolean;
	ReceptionLevel: number;
	ReceptionLevelChangedTime: Date;
	PanelBatteryLevel: number;
	IsPanelOffline: boolean;
	IsPanelOfflineChangedTime: Date;
	IsZWaveEnabled: boolean;
	IsZWaveEnabledChangedTime: Date;
	IsMainPowerConnected: boolean;
	IsMainPowerConnectedChangedTime: Date;
	IsSimCardReady: boolean;
	CommunicationLink: number;
	BackupChannelStatus: number;
	BackupChannelStatusDescription: number;
	HasLowBattery: boolean;
	HasLowBatteryChangedTime: Date;
	SetupMode: boolean;
	SirensVolumeLevel: number;
	SirensDuration: number;
	SirensVolumeLevelDurationChangedTime: Date;
	IsInInstallationMode: boolean;
	IsInInstallationModeChangedTime?: any;
	IsInSignalStrengthTest: boolean;
	IsInSignalStrengthTestChangedTime?: any;
	PanelId: number;
	IsSynchronized: boolean;
	SirensEntryExitDuration: number;
	FrtState: number;
	FrtStateChangedTime?: any;
}
