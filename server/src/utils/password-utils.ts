import bcrypt from "bcrypt";
import environment from "../config/environment";

class PasswordUtils {
  static async hashPassword(password: string) {
    console.log({ password });
    console.log(environment?.saltRounds);
    console.log(await bcrypt.hash(password, Number(environment?.saltRounds)));
    const hashPassword = await bcrypt.hash(
      password,
      Number(environment?.saltRounds)
    );
    return bcrypt.hash(password, Number(environment?.saltRounds));
  }

  static async comparePasswords(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default PasswordUtils;
