interface IUserResource {
    username: string;
    password: string;
    fetch(): void;
}

class UserResource implements IUserResource {

    username = ''
    password= ''
    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
    fetch(): void {
      console.log('fetch user resource')
      console.log(`current user is ${this.username}, password: ${this.password}`)
    }
  }


class UserProxy {
    private resource: IUserResource;
  
    constructor(username: string, password: string) {
      this.resource = new UserResource(username, password);
    }
  
    fetch(): void {
      //
      console.log('invoke resource fetch method')
      this.resource.fetch();
    }
  }

const resourceProxy = new UserProxy('username', '123456');

resourceProxy.fetch();
