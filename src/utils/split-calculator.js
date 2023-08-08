export const calculateSplit = (roomLength, roomWidth, ceilingHeight, sunlight) => {
    const roomSize = roomLength * roomWidth;
    const roomVolume = roomSize * ceilingHeight;
    const sunlightFactor = sunlight === 'sunny' ? 1.5 : 1;
    const splitSize = roomVolume * sunlightFactor / 20;
    return splitSize.toFixed(2);
}