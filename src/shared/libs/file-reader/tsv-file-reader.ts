import { FileReader } from './types.js';
import { readFileSync } from 'node:fs';
import { Conveniences, HouseType, Offer, City } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly filename: string) {}

  read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(
        ([
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
          author,
          commentsCount,
          coordinates,
        ]) => ({
          name,
          description,
          publicationDate: new Date(publicationDate),
          city: City[city as keyof typeof City],
          previewPhotos: previewPhotos.split(';'),
          isPremium: Boolean(isPremium),
          isFavorite: Boolean(isFavorite),
          rating: Number(rating),
          houseType: HouseType[houseType as keyof typeof HouseType],
          roomsCount: Number(roomsCount),
          guestsCount: Number(guestsCount),
          price: Number(price),
          conveniences: conveniences.split(';') as Conveniences[],
          author,
          commentsCount: Number(commentsCount),
          coordinates: {
            latitude: Number(coordinates.split(';')[0]),
            longitude: Number(coordinates.split(';')[1]),
          },
        })
      );
  }
}
