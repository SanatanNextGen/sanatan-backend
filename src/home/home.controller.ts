import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeDto } from './homeDto';
import { HomeType } from './home.type';

@Controller('homePage')
export class HomeController {
  constructor(private readonly service: HomeService) {}

  @Post()
  async create(@Body() homeDto: HomeDto) {
    try {
      const data = await this.service.createHome(homeDto);
      return { statusCode: 201, data }; 
    } catch (error) {
      return {
        statusCode: 500,
        message: 'FAILED_TO_ADD_HOME_PAGE_DATA',
        error: error.message, 
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.service.getAllHomes();
      return { statusCode: 200, data };
    } catch (error) {
      return {
        statusCode: 500,
        message: 'FAILED_TO_FETCH_HOME_PAGE_DATA',
        error: error.message,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.service.getHomeById(id);
      return { statusCode: 200, data };
    } catch (error) {
      return {
        statusCode: 404,
        message: error.message || 'HOME_NOT_FOUND',
      };
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() homeDto: HomeDto) {
    try {
      const data = await this.service.updateHome(id, homeDto);
      return { statusCode: 200, data };
    } catch (error) {
      return {
        statusCode: 404,
        message: error.message || 'FAILED_TO_UPDATE_HOME',
      };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const data = await this.service.deleteHome(id);
      return { statusCode: 200, data };
    } catch (error) {
      return {
        statusCode: 404,
        message: error.message || 'FAILED_TO_DELETE_HOME',
      };
    }
  }
}
