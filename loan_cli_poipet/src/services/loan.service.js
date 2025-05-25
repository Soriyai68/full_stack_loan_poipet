import http from "../http-common";
import authHeader from './auth-header'; // Assuming you need authentication headers for loan operations
 
class LoanService {
  getAll() {
    return http.get("/loans", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/loans/${id}`, { headers: authHeader() });
  }

  create(data) {
    // Get user ID from local storage
    // Assuming AuthService is accessible globally or imported elsewhere if needed
    const user = JSON.parse(localStorage.getItem('user')); // Directly access user from local storage
    if (!user || !user.id) {
      return Promise.reject("User not logged in or user ID not available.");
    }
    const loanDataWithUserId = { ...data, userId: user.id };
    return http.post("/loans", loanDataWithUserId, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/loans/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/loans/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/loans`, { headers: authHeader() });
  }

  findAllByUserId(userId) {
    return http.get(`/loans/user/${userId}`, { headers: authHeader() });
  }

  // New method to fetch a single user's loan status
  async getUserLoanStatus(userId) {
    try {
      const response = await http.get(`/loans/user/${userId}`, { headers: authHeader() });
      // Assuming the backend returns an array, find the first loan or handle accordingly
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error("Error fetching user loan status:", error);
      throw error; // Re-throw the error for the component to handle
    }
  }
}

export default new LoanService();