import axios, { AxiosInstance } from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const BASE_URL = apiUrl;

const HttpClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});


HttpClient.interceptors.request.use(
  (config) => {
    if (config.headers) {
       config.headers.Authorization = localStorage.getItem("token");

      // TODO:효경님, 이부분은 사장단에서 이미지 업로드 필요한 페이지 url로 바꿔쓰면 될꺼같습니다 
      // 이부분도 .includes("api주소")를 변수로 받아서 고통으로 작업하면 좋겠네요
      //
      // if (config.url?.includes("/api/user/pet/addPet")) {
      //   config.headers["Content-Type"] = "multipart/form-data";
      // }
      // if (config.url?.includes("/api/user/pet/update/")) {
      //   config.headers["Content-Type"] = "multipart/form-data";
      // }
    }
    return config;
  },
  (error) => {
    console.log(error);
    // return Promise.reject(error);
  }
);

export default HttpClient;