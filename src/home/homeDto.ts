import { IsString } from 'class-validator';
import { ID, Logo, Heading, Banner, Description } from 'types';
import { HomeType } from './home.type';

export class HomeDto implements HomeType {
  @IsString()
  id: ID;

  @IsString()
  logo: Logo;

  @IsString()
  heading: Heading;

  @IsString()
  banner: Banner;

  @IsString()
  description: Description;
}
