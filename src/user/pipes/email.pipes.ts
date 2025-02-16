import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";



@Injectable()
export class EmailValidationPipe implements PipeTransform {
    transform(value: any) {
        const emailRejexp = /^[a-zA-Z0-9_.]{3,30}@[a-zA-Z0-9]{2,30}\.[a-zA-Z]{2,20}$/;
        if(emailRejexp.test(value)) return value
        else throw new BadRequestException('Invalida email format')
    }

}