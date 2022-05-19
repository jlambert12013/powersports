const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

const getUser = (req, res) => {
  res.json({ message: "User Data Display" });
};

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

module.exports = { loginUser, getUser, registerUser };
