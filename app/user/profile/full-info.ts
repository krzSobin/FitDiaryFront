import { IUserBaseInfo } from './user-base-info';
import { IBodyMeasurement } from './body-measurement';

export interface IFullInfo {
    UserBaseInfo: IUserBaseInfo;
    LastBodyMeasurement: IBodyMeasurement;
}