function login(userLogin, password) {
  if (!userLogin || !password) {
    console.log("Identifiants manquants");
    return false;
  }
  console.log(`Tentative de connexion pour l'utilisateur : ${username}`);
  return true;
}

module.exports = { login };
