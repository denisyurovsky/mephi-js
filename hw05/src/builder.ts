class User {
    constructor(
      public username: string,
      public sex: string,
      public age: number,
      public photo: string,
      public email: string
    ) {}
  }

class UserBuilder {
    public username: string = '';
    public sex: string = '';
    public age: number = 0;
    public photo: string = '';
    public email: string = '';
  
    setUserName(name: string) {
      this.username = name;
      return this;
    }
  
    setSex(sex: string) {
      this.sex = sex;
      return this;
    }
  
    setAge(age: number) {
      this.age = age;
      return this;
    }
  
    setPhoto(photo: string) {
      this.photo = photo;
      return this;
    }
  
    setEmail(email: string) {
      this.email = email;
      return this;
    }
  
    build() {
        if (this.username && this.sex && this.age && this.photo && this.email) {
            return new User(this.username, this.sex, this.age, this.photo, this.email);
        } else {
            throw new Error('not all fields are filled')
        }
    }
  }

  const builder = new UserBuilder;

  builder.setAge(23)
  builder.setEmail('test@mail.ru')
  builder.setSex('male')
  builder.setUserName('denzel')
  builder.setPhoto('photo.jpg')

  console.log(builder.build());