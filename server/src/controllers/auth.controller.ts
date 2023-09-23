import { User } from "../models/user"; // Import your User entity

import DatabaseLoader from "../loaders/database";
import PasswordUtils from "../utils/password-utils";
class AuthController {
  private databaseLoader;
  private dataSource;

  constructor() {
    this.databaseLoader = DatabaseLoader.getInstance();
    this.dataSource = this.databaseLoader.getDataSource();
  }

  async signup({ fullName, email, password, role, is_deleted }: any) {
    const hashedPassword = await PasswordUtils.hashPassword(password);

    const userData = {
      fullName,
      email,
      password: hashedPassword,
      role,
      is_deleted
    };

    const user = await this.dataSource.manager.create(User, userData);

    const createdUser = await this.dataSource.manager.save(user);

    console.log({ createdUser });
  }

  async login(email: string, password: string) {
    const conditions = { email };
    const user = await this.dataSource.manager.findOneBy(User, conditions);

    console.log(user);
  }
}

export default new AuthController();
