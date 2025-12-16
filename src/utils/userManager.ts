interface User {
  email: string;
  password: string;
}

const usersData: User[] = [{ email: 'test@gmail.com', password: '123' }];

export const addUser = (user: User) => {
  usersData.push(user);
  return true;
};

export const validateUser = (credentials: User) => {
  return usersData.some(
    user =>
      user.email === credentials.email &&
      user.password === credentials.password,
  );
};
