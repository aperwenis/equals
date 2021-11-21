import dotenv from 'dotenv';
import { runGreeter } from './init';

dotenv.config();

runGreeter().catch(console.error);
