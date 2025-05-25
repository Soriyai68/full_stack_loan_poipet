export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user')); // Get user from local storage

  if (user && user.accessToken) {
    // For Spring Boot back-end
    // return { Authorization: 'Bearer ' + user.accessToken };

    // For Node.js Express back-end with JWT
    return { 'x-access-token': user.accessToken }; // Assuming your backend uses 'x-access-token' header
  } else {
    return {}; // Return empty object if no user or token
  }
}
