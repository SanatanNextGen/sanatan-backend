import { Schema } from 'mongoose';

export const HomeSchema = new Schema({
  id: { type: String, required: true },
  logo: { type: String, required: true },
  heading: { type: String, required: true },
  banner: { type: String, required: true },
  description: { type: String, required: true },
});
