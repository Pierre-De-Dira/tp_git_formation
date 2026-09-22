// Auteur : Groupe 12/ Alioun SANKARA
// Fonction de déconnexion de l'utilisateur
function logout() {
  console.log("Déconnexion en cours...");
  localStorage.removeItem("authToken");
  window.location.href = "/login";
}