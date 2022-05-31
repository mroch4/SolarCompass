import { DECIMAL_PRECISION } from './Common';
import { gradientsCollection } from './Gradients';

const getLatitudeSign = (latitude) => {
    if (latitude > 0) {
        return 'N';
    }
    if (latitude < 0) {
        return 'S';
    }
    return ' ';
};

const getLongitudeSign = (longitude) => {
    if (longitude > 0) {
        return 'E';
    }
    if (longitude < 0) {
        return 'W';
    }
    return ' ';
};

const getRandomGradient = () => {
    const randomNumber = Math.floor(gradientsCollection.length * Math.random()) + 1;
    return `${gradientsCollection[randomNumber]}`;
};

const degreesStringBuilder = (decimalCoordinate) => {
    const degrees = Math.trunc(decimalCoordinate);
    const minutes = Math.trunc((decimalCoordinate - degrees) * 60);
    const seconds = (((decimalCoordinate - degrees) * 60) - minutes) * 60;
    return `${Math.abs(degrees)}° ${zeroPrefix(Math.abs(minutes))}' ${zeroPrefix(Math.abs(seconds.toFixed(DECIMAL_PRECISION)))}''`;
};

const zeroPrefix = (value) => {
    if (value < 10) {
        return `0${value}`;
    }
    return value;
};

export {
    getLatitudeSign,
    getLongitudeSign,
    getRandomGradient,
    degreesStringBuilder,
    zeroPrefix
}

