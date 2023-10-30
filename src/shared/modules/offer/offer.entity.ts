import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { City, Conveniences, HouseType } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public name: string;

  @prop({ trim: true, required: true })
  public description: string;

  @prop({ required: true })
  public publicationDate: Date;

  @prop({
    type: () => String,
    enum: City,
    required: true
  })
  public city: City;

  @prop({ required: true })
  public previewPhotos: string[];

  @prop({ required: true })
  public isPremium: boolean;

  @prop({ required: true })
  public isFavorite: boolean;

  @prop({ required: true })
  public rating: number;

  @prop({
    type: () => String,
    enum: HouseType,
    required: true
  })
  public houseType: HouseType;

  @prop({ required: true })
  public roomsCount: number;

  @prop({ required: true })
  public guestsCount: number;

  @prop({ required: true })
  public price: number;

  @prop({ required: true })
  public conveniences: Conveniences[];

  @prop({ default: 0 })
  public commentsCount: number;

  @prop({ required: true })
  public coordinates: { latitude: number; longitude: number };


  // @prop({
  //   ref: CategoryEntity,
  //   required: true,
  //   default: [],
  //   _id: false
  // })
  // public categories!: Ref<CategoryEntity>[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public author: Ref<UserEntity>;

  // constructor(offerData: Offer) {
  //   super();

  //   this.email = userData.email;
  //   this.avatarPath = userData.avatarPath;
  //   this.firstname = userData.firstname;
  //   this.lastname = userData.lastname;
  // }
}

export const OfferModel = getModelForClass(OfferEntity);
