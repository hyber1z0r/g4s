import { TimeZone } from "./TimeZone";
import { DefaultTemperatureDevice } from "./DefaultTemperatureDevice";

export interface PanelSettings {
	TimeZone: TimeZone;
	OffsetFromUtcInMinutes: number;
	TemperatureUnit: number;
	DefaultTemperatureDevice: DefaultTemperatureDevice;
	InstalledModules: number;
	PrimaryLink: number;
	AvailableDelayTimes: number[];
	TagAccessCodeMinLength: number;
	TagAccessCodeMaxLength: number;
	TagAccessCodeAvailableLengths: number[];
	GuardAccessCodeLength: number;
}
