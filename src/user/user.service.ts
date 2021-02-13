import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/tools/dtos/user.dto';
import { UserModel } from 'src/tools/models/user.model';

let id: number = 0;
const result: UserModel[] = [];

@Injectable()
export class UserService {
   
  getAllUser(): UserModel[] {
    if (result.length === 0) {
        this.creatingMockUser(
          {
            name: 'Murat',
            surname: 'Dere',
            email: 'muratdere90@gmail.com',
            password: '12345',
            image: 'murat.jpg'
          }
        );
    }
    return result;
  }

  createUser(body: UserCreateDto) {
    const isExist = result.find(res => {res.email === body.email});
    if (isExist) {
      return isExist;
    }
    else {
      this.creatingMockUser(body);
      return result.slice(result.length-1,result.length);
    }
  }

  getUserById(id): any {
    const user = result.find(user => user.id === id.toString());

    if(user) {
      return user;
    }
    return 'user does not exist';
  }

  private creatingMockUser(data: any) {
    const user: UserModel = new UserModel();
    user.name = data.name;
    user.email = data.email;
    user.surname = data.surname;
    user.password = data.password;
    user.image = data.image;
    user.id = (++id).toString();
    result.push(user);
  }
}
