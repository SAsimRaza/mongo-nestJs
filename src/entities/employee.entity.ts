import { ApiProperty } from '@nestjs/swagger';

export class Employee {
  @ApiProperty({ type: String })
  FirstName: string;
  @ApiProperty({ type: String })
  SurName: string;
  @ApiProperty({ type: String })
  Gender: string;
  @ApiProperty({ type: String })
  Designation: string;
  @ApiProperty({ type: String })
  Email: string;
  @ApiProperty({ type: String })
  Address: string;
  @ApiProperty({ type: String })
  Salary: string;
}
