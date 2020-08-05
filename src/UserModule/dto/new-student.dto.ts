import { User } from '../entity/user.entity';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { GenderEnum } from '../enum/gender.enum';
import { EscolarityEnum } from '../enum/escolarity.enum';

export class NewStudentDTO {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: User['name'];

  @IsNotEmpty()
  @IsString()
  @Expose()
  email: User['email'];

  @IsNotEmpty()
  @IsString()
  @Expose()
  password: User['password'];

  @IsNotEmpty()
  @IsString()
  @Expose()
  nickname: string;

  @Transform((date) => date && new Date(date))
  @IsNotEmpty()
  @IsDate()
  @Expose()
  birthday: Date;

  @IsNotEmpty()
  @IsEnum(GenderEnum)
  @Expose()
  gender: GenderEnum;

  @IsNotEmpty()
  @IsEnum(EscolarityEnum)
  @Expose()
  schooling: EscolarityEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  institutionName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  profession: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  address: string;

  @IsOptional()
  @IsString()
  @Expose()
  urlFacebook?: User['urlFacebook'];

  @IsOptional()
  @IsString()
  @Expose()
  urlInstagram?: User['urlInstagram'];
}
