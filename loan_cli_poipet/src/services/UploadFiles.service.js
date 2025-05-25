import http from "../http-common";

class UploadFilesService {
  upload(file, userId, documentType, assignedImage, onUploadProgress) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      return Promise.reject("User not logged in or user ID not available.");
    }

    let formData = new FormData();
    formData.append("file", file);
    formData.append("assigned_image", assignedImage);

    // Include documentType in the query parameters
    return http.post(`/upload?userId=${user.id}&documentType=${documentType}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles(userId) {
    return http.get(`/files?userId=${userId}`);
  }
}

export default new UploadFilesService();