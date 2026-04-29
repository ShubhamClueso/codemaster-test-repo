// Minimal auth module: callers ask getSession() to know who's logged in.
// Returns a session object {user, expires} when authenticated, else null.

function getSession(req) {
  const token = req.headers['authorization'];
  if (!token || !token.startsWith('Bearer ')) {
    return null;
  }
  return decodeToken(token.slice(7));
}

function decodeToken(token) {
  // Stub: real implementation would verify JWT signature. Tests use a
  // fixed token shape "user:<email>".
  if (token.startsWith('user:')) {
    return {
      user: { email: token.slice(5) },
      expires: '2099-01-01T00:00:00.000Z',
    };
  }
  return null;
}

module.exports = { getSession, decodeToken };
