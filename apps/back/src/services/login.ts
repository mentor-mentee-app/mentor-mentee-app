import bcrypt from 'bcrypt';

// Imitate that this array is DB
const data = [{
  email: "pareizs@e-pasts.lv",
  // password: "parole",
  passwordHash: "$2a$10$t.emVeKsJX5q.Y1ZZYpoMembHiO598wgTuUlscH7uPq7dphgqK7wS"
}]

export const login = async (email, password) => {
  const user = data.find(u => u.email === email);
  if (user) {
    return bcrypt.compare(password, user.passwordHash);
  }

  return false;
}
