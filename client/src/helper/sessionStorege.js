class SessionStorage {
    setToken(token){
        localStorage.setItem('token', token);
    }
    getToken(){
       return localStorage.getItem('token')
    }
    setUserDetails(userDetails){
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    getUserDetails(){
      return  JSON.parse(localStorage.getItem('userDetails'))
    }
}

export const {setToken,getToken} =  new  SessionStorage();


