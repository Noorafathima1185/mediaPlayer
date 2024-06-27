import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"


// api to get add video
export const addVideoApi = async(reqbody)=>{
    return await commonApi('POST',`${serverurl}/videos`,reqbody)
}

// api to get all video
export const getVideoApi = async()=>{
    return await commonApi(`GET`,`${serverurl}/videos`,"")
}

// api to delete a video
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/videos/${id}`,{})
}

// api to add video to watch history
export const addToHistoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverurl}/history`,reqBody)
}

// api to get video from watch history
export const getVideoFromHistoryApi = async()=>{
    return await commonApi ('GET',`${serverurl}/history`,"")
}

// api to delete a video from history
export const deleteVideoFromHistory = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/history/${id}`,{})
}

// api to add category
export const addCategoryApi = async(reqBody)=>{
    return await commonApi ('POST',`${serverurl}/category`,reqBody)
}

// api to get all category
export const AllCategoryApi = async()=>{
    return await commonApi('GET',`${serverurl}/category`,"")
}

// api to delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/category/${id}`,{})
}

// api to get a video  
export const AvideoApi = async(id)=>{
    return await commonApi('GET',`${serverurl}/videos/${id}`,"")
}

// api to update category
export const updateCategoryApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverurl}/category/${id}`,reqBody)
}