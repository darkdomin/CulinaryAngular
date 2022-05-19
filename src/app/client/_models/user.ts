export class User {
  id: string | undefined;
  email!: string;
  password!: string;
  newPassword: string="";
  confirmPassword: string = "";
  isDeleting: boolean = false;
  token!: string;
}
