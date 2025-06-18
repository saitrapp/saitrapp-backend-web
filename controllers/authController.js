exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  // Autenticación simulada
  if (username === 'admin' && password === 'admin') {
    return res.json({ success: true, token: 'fake-jwt-token' });
  }
  res.status(401).json({ success: false, message: 'Credenciales inválidas' });
};