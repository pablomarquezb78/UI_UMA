import data from './itemsBag.json';

const json = data;

export function shuffleData() {
    const shuffledData = json.slice().sort(() => Math.random() - 0.5);
    return shuffledData;
}