import { DECIMAL_PRECISION } from './Common';
import gradients from './Gradients';

const degreesToRadians = (rad: number): number => {
    return rad * Math.PI / 180;
}

const getLatitudeSign = (latitude: number): string => {
    if (latitude > 0) {
        return 'N';
    }
    if (latitude < 0) {
        return 'S';
    }
    return '';
};

const getLongitudeSign = (longitude: number): string => {
    if (longitude > 0) {
        return 'E';
    }
    if (longitude < 0) {
        return 'W';
    }
    return '';
};

const getBackgroundGradient = (): string => {
    const randomNumber: number = Math.floor(gradients.length * Math.random());
    return `${gradients[randomNumber]}`;
};

const degreesStringBuilder = (decimalCoordinate: number): string => {
    const degrees: number = Math.trunc(decimalCoordinate);
    const minutes: number = Math.trunc((decimalCoordinate - degrees) * 60);
    const seconds: number = (((decimalCoordinate - degrees) * 60) - minutes) * 60;
    return `${Math.abs(degrees)}° ${zeroPrefixer(Math.abs(minutes))}' ${zeroPrefixer(Math.abs(+seconds.toFixed(DECIMAL_PRECISION)))}''`;
};

const radiansToDegrees = (rad: number): number => {
    return rad * 180 / Math.PI;
}

const zeroPrefixer = (value: number): string => {
    if (value < 10) {
        return `0${value}`;
    }
    return `${value}`;
};

export {
    degreesToRadians,
    getLatitudeSign,
    getLongitudeSign,
    getBackgroundGradient,
    degreesStringBuilder,
    radiansToDegrees,
    zeroPrefixer
};
