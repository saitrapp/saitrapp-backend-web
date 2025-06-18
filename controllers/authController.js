exports.loginUser = (req, res) => {
  const { usuario, clave } = req.body;

  // Autenticación simulada
  if (usuario === 'admin' && clave === 'admin') {
    return res.json({ success: true, token: 'fake-jwt-token' });
  }

  res.status(401).json({ success: false, message: 'Credenciales inválidas' });
};
