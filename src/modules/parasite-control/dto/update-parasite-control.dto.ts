import { PartialType } from '@nestjs/mapped-types';
import { CreateParasiteControlDto } from './create-parasite-control.dto';

export class UpdateParasiteControlDto extends PartialType(CreateParasiteControlDto) {}
