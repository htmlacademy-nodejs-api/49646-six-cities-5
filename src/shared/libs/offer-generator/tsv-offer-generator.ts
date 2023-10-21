import dayjs from 'dayjs';
import { OfferGenerator } from './types.js';
import {
  City,
  Conveniences,
  HouseType,
  MockServerData,
} from '../../types/entities.js';
import { generateRandomValue, getRandomItem } from '../../utils/index.js';

const cityCoords = {
  Paris: { latitude: 48.85661, longitude: 2.351499 },
  Cologne: { latitude: 50.938361, longitude: 6.959974 },
  Brussels: { latitude: 50.846557, longitude: 4.351697 },
  Amsterdam: { latitude: 52.370216, longitude: 4.895168 },
  Hamburg: { latitude: 53.550341, longitude: 10.000654 },
  Dusseldorf: { latitude: 51.225402, longitude: 6.776314 },
};

function getCoords(city: City) {
  return cityCoords[city];
}

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const publicationDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const city = getRandomItem(Object.values(City));
    const photo = getRandomItem<string>(this.mockData.offerImages);
    const isPremium = getRandomItem([0, 1]);
    const isFavorite = getRandomItem([0, 1]);
    const rating = generateRandomValue(1, 5, 1).toString();
    const houseType = getRandomItem(Object.values(HouseType));
    const roomsCount = generateRandomValue(1, 8, 0).toString();
    const guestsCount = generateRandomValue(1, 10, 0).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const conveniences = getRandomItem(Object.values(Conveniences));
    const author = getRandomItem(this.mockData.users);
    const commentsCount = generateRandomValue(0, 10, 0).toString();
    const coords = `${getCoords(city).latitude};${getCoords(city).longitude}`;

    return [
      title,
      description,
      publicationDate,
      city,
      photo,
      isPremium,
      isFavorite,
      rating,
      houseType,
      roomsCount,
      guestsCount,
      price,
      conveniences,
      author,
      commentsCount,
      coords,
    ].join('\t');
  }
}
