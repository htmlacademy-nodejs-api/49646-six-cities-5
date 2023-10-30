import { City, Conveniences, HouseType } from '../../../types/entities.js';

export class CreateOfferDto {
  name: string;
  description: string;
  publicationDate: Date;
  city: City;
  previewPhotos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  houseType: HouseType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  conveniences: Conveniences[];
  author: string;
  commentsCount: number;
  coordinates: { latitude: number; longitude: number };
}
