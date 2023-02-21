class SessionStorage {
  setToken(token) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token')
  }
  setUserDetails(userDetails) {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('userDetails'))
  }
  removeSessions() {
    localStorage.clear();
    window.location.href = '/users/login'
  }

  setEmail(Email) {
    localStorage.setItem("Email", Email)
  }
  getEmail() {
    return localStorage.getItem("Email")
  }

  setOTP(OTP) {
    localStorage.setItem("OTP", OTP)
  }
  getOTP() {
    return localStorage.getItem("OTP")
  }
}

export const { setToken, getToken, removeSessions, setEmail, getEmail,setOTP, getOTP  } = new SessionStorage();


