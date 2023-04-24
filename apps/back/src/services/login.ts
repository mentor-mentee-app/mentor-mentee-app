const data = {
  email: "pareizs@e-pasts.lv",
  password: "parole",
  passwordHash: ""
}

export const login = async (email, password) => {
  if (data.email === email && data.password === password) {
    return true;
  }
  return false;
}
