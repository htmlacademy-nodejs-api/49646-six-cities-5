export type User = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  role: string;
};

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum HouseType {
  Apartment = 'Apartment',
  House = 'House',
  Room = 'Room',
  Hotel = 'Hotel',
}

export enum Conveniences {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
}

export type Offer = {
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
};

export type Commentary = {
  comment: string;
  createdAt: Date;
  rating: number;
  password: string;
  author: string;
};

export type MockServerData = {
  categories: string[];
  titles: string[];
  descriptions: string[];
  offerImages: string[];
  categoryImages: string[];
  users: string[];
  emails: string[];
  avatars: string[];
};
