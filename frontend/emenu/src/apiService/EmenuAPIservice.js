import axios from "./axios";
class EmenuAPIService {
  async getAllBusinessList() {
    return await axios.get("business/");
  }
  async getSpecifiBusinessCategoryList(business_id){
    return await axios.get(`business/${business_id}/category/`)
  }
  async getAllItemsInSpecificCategory(category_id) {
    return await axios.get(`category/${category_id}/items/`)
  }

  async getBusinessSeats(business_id){
    return await axios.get(`business/${business_id}/seats/`)
  }

  creteUser(x) {
    return axios.post("/account/users/", x);
  }
  Login(data) {
    return axios.post("/account/login/", data);
  }

  getAllPosts() {
    return axios.get("/post/posts/");
  }
  async getPostDetail(id) {
    return await axios.get(`/post/posts/${id}/`);
  }

  async likePost(postid, data) {
    return await axios.post(`/post/posts/${postid}/like_post/`, data);
    // http://localhost:8000/api/post/posts/5/like_post/
  }

  async getPostAllComments(postid) {
    return await axios.get(`/post/posts/${postid}/comments`);
    //http://localhost:8000/api/post/posts/6/comments
  }

  async PostComment(postid, data) {
    return await axios.post(`/post/posts/${postid}/comments/`, data);
    //http://localhost:8000/api/post/posts/6/comments/
  }

  async getApostCommentAllReply(postid, commentid) {
    return await axios.get(
      `/post/posts/${postid}/comments/${commentid}/reply/`
    );
    // http://localhost:8000/api/post/posts/4/comments/42/reply/
  }

  async PostaReplyonAComment(postid, commentid, reply_data) {
    return await axios.post(
      `/post/posts/${postid}/comments/${commentid}/reply/`,
      reply_data
    );
    //http://localhost:8000/api/post/posts/9/comments/43/reply/
  }

  //   get(id) {
  //     return httpCommon.get(`/tutorials/${id}`);
  //   }

  //   create(data) {
  //     return httpCommon.post("/tutorials", data);
  //   }

  //   update(id, data) {
  //     return httpCommon.put(`/tutorials/${id}`, data);
  //   }

  //   delete(id) {
  //     return httpCommon.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return httpCommon.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return httpCommon.get(`/tutorials?title=${title}`);
  //   }
}

export default new EmenuAPIService();
