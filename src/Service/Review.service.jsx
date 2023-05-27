/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
import http from "./AxiosContext";

const createReview=(data) => { 
    return http.post("/review",data )
}
const getAll=() => { 
    return http.get("/review") 
}
const updateReview=(id , data ) => { 
    return http.put(`/review/${id}`, data ) 
}

const getReviewByProductId=(id ) => { 
    return http.get(`/review/reviewbyproduct/${id}`) 
}

const getReview=(id ) => { 
    return http.get(`/review/${id}`) 
}
const deleteReview=(id ) => { 
    return http.delete(`/review/${id}`) 
}
export default { 
    createReview , getAll ,updateReview ,getReviewByProductId , getReview ,deleteReview
}
