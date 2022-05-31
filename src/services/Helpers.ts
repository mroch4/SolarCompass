import { DECIMAL_PRECISION } from './Common';
import gradients from './Gradients';

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

const getRandomGradient = (): string => {
    const randomNumber: number = Math.floor(gradients.length * Math.random()) + 1;
    return `${gradients[randomNumber]}`;
};

const degreesStringBuilder = (decimalCoordinate: number): string => {
    const degrees: number = Math.trunc(decimalCoordinate);
    const minutes: number = Math.trunc((decimalCoordinate - degrees) * 60);
    const seconds: number = (((decimalCoordinate - degrees) * 60) - minutes) * 60;
    return `${Math.abs(degrees)}° ${zeroPrefix(Math.abs(minutes))}' ${zeroPrefix(Math.abs(+seconds.toFixed(DECIMAL_PRECISION)))}'`;
};

const zeroPrefix = (value: number): string => {
    if (value < 10) {
        return `0${value}`;
    }
    return `${value}`;
};

export {
    getLatitudeSign,
    getLongitudeSign,
    getRandomGradient,
    degreesStringBuilder,
    zeroPrefix
}

