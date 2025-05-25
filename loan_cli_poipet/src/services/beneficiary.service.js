import http from "../http-common";
import authHeader from './auth-header'; // Assuming you need authentication headers

class BeneficiaryService {
  getAll() {
    return http.get("/beneficiarys", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/beneficiarys/${id}`, { headers: authHeader() });
  }

  create(data) {
    // Get user ID from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      return Promise.reject("User not logged in or user ID not available.");
    }
    const beneficiaryDataWithUserId = { ...data, userId: user.id };
    return http.post("/beneficiarys", beneficiaryDataWithUserId, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/beneficiarys/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/beneficiarys/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/beneficiarys`, { headers: authHeader() });
  }

  findAllByUserId(userId) {
    return http.get(`/beneficiarys/user/${userId}`, { headers: authHeader() });
  }

  // New method to fetch a single user's beneficiary information
  async getUserBeneficiary(userId) {
    try {
      const response = await http.get(`/beneficiarys/user/${userId}`, { headers: authHeader() });
      // Assuming the backend returns an array, find the first beneficiary or handle accordingly
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error("Error fetching user beneficiary information:", error);
      throw error; // Re-throw the error for the component to handle
    }
  }
}

export default new BeneficiaryService();