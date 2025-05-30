import http from "../http-common";
import authHeader from './auth-header'; // Assuming you need authentication headers

class CustomerService {
  getAll() {
    return http.get("/customers", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/customers/${id}`, { headers: authHeader() });
  }

  create(data) {
    // Get user ID from local storage if needed for customer creation
    // Assuming AuthService is accessible globally or imported elsewhere if needed
    const user = JSON.parse(localStorage.getItem('user')); // Directly access user from local storage
    if (!user || !user.id) {
      return Promise.reject("User not logged in or user ID not available.");
    }
    const customerDataWithUserId = { ...data, userId: user.id };
    return http.post("/customers", customerDataWithUserId, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/customers/${id}`, data, { headers: authHeader() });
  }

  updateStatus(id, data) {
    return http.put(`/customers/status/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/customers/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/customers`, { headers: authHeader() });
  }

  findAllByUserId(userId) {
    return http.get(`/customers/user/${userId}`, { headers: authHeader() });
  }

  // Method to fetch a single user's customer profile
  async getUserCustomerProfile(userId) {
    try {
      const response = await http.get(`/customers/user/${userId}`, { headers: authHeader() });
      // Assuming the backend returns an array, find the first customer or handle accordingly
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error("Error fetching user customer profile:", error);
      throw error; // Re-throw the error for the component to handle
    }
  }
}

export default new CustomerService();