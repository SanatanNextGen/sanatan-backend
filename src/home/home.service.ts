import { HomeDto } from './homeDto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HomeType } from './home.type';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel('HomePage') private readonly homeModel: Model<HomeType>,
  ) {}

  async createHome(homeDto: HomeDto): Promise<HomeType> {
    try {
      const existindData = await this.getAllHomes();
      if (existindData.length > 0) throw new Error('DATA_ALREADY_EXIST');
      const newHome = new this.homeModel({ ...homeDto, id: uuidv4() });
      return await newHome.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllHomes(): Promise<HomeType[]> {
    try {
      return await this.homeModel.find().exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getHomeById(id: string): Promise<HomeType> {
    try {
      const home = await this.homeModel.findOne({ id }).exec();
      if (!home) {
        throw new NotFoundException(`Home with id ${id} not found`);
      }
      return home;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateHome(id: string, homeDto: HomeDto): Promise<HomeType> {
    try {
      const updatedHome = await this.homeModel
        .findOneAndUpdate({ id }, homeDto, {
          new: true,
        })
        .exec();
      if (!updatedHome) {
        throw new NotFoundException(`Home with id ${id} not found`);
      }
      return updatedHome;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteHome(id: string): Promise<HomeType> {
    try {
      const deletedHome = await this.homeModel.findOneAndDelete({ id }).exec();
      if (!deletedHome) {
        throw new NotFoundException(`Home with id ${id} not found`);
      }
      return deletedHome;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
