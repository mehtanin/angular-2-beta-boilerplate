import {Injectable} from "angular2/core";

@Injectable()
export class LoginService {
  login(pin: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (pin === 112233) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }
}
