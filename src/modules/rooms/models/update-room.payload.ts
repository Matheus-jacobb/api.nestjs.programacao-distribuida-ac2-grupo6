import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, IsNumber, IsUUID } from 'class-validator';

export class UpdateRoomPayload {
  @ApiProperty()
  @IsDefined({ message: 'É necessário informar a categoria.' })
  public category?: string;

  @ApiProperty()
  @IsDefined({ message: 'É necessário informar o tipo de cama.' })
  public bedType?: string;

  @ApiProperty()
  @IsString({ message: 'Preço diário inválido.' })
  public dailyPrice?: string;

}
