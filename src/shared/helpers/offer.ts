import { Offer, Conveniences, HouseType, City } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    name,
    description,
    publicationDate,
    city,
    previewPhotos,
    isPremium,
    isFavorite,
    rating,
    houseType,
    roomsCount,
    guestsCount,
    price,
    conveniences,
    firstname,
    lastname,
    email,
    avatar,
    commentsCount,
    coordinates,
  ] = offerData.replace('\n', '').split('\t');

  return {
    name,
    description,
    publicationDate: new Date(publicationDate),
    city: City[city as keyof typeof City],
    previewPhotos: previewPhotos.split(';'),
    isPremium: Boolean(Number(isPremium)),
    isFavorite: Boolean(Number(isFavorite)),
    rating: Number(rating),
    houseType: HouseType[houseType as keyof typeof HouseType],
    roomsCount: Number(roomsCount),
    guestsCount: Number(guestsCount),
    price: Number(price),
    conveniences: conveniences.split(';') as Conveniences[],
    firstname,
    lastname,
    email,
    avatar,
    commentsCount: Number(commentsCount),
    coordinates: {
      latitude: Number(coordinates.split(';')[0]),
      longitude: Number(coordinates.split(';')[1]),
    },
  };
}
