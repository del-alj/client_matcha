export const validation = {
  userName: {
    pattern: "[A-Za-z][A-Za-z0-9_]{3,15}",
    title: "Username should contain more than 3 and less than 15 characters.",
  },
  firstName: {
    pattern: "[A-Za-z]{3,10}",
    title: "FirstName should contain more than 3 and less than 10 characters.",
  },
  lastName: {
    pattern: "[A-Za-z]{3,10}",
    title: "Lastname should contain more than 3 and less than 10 characters.",
  },
  email: {
    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    title: "Email should only contain lowercase letters.",
  },
  password: {
    pattern: "(?=.*[0-9])(?=.*[A-Z])^.{8,}$",
    title:
      "Password should contain at least 8 characters, 1 uppercase, 1 special character, 1 number.",
  },
};
