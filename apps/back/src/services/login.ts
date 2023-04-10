import bcrypt from 'bcrypt';

const saltRounds = 10;

const data = {
  user: "davis.bojars@gmail.com",
  password: "parole",
  passwordHash: ""
}

export const login = async (username, password) => {
  if (data.user === username) {
    const result = bcrypt.compare(password, data.passwordHash);
  }
}

export const register = async (username, password) => {
  
}