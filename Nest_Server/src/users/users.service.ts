import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(data: Partial<User>): Promise<UserDocument> {
    const existing = await this.userModel.findOne({ email: data.email });
    if (existing) throw new ConflictException('Email already registered');
    return this.userModel.create(data);
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).select('-password');
  }

  async updateProfile(id: string, data: Partial<User>): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).select('-password');
  }
}
