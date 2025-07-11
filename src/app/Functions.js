'use client'
import axios from "axios";
import { useStore } from "./store/store";
import { useForm } from "react-hook-form";


const  base ='http://localhost:8000/'





export const logOut = async () => {
  const { setUser, setLoading ,setLogin,setToken,token,setError} = useStore.getState(); 


  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/logout`,
      {},
      {
        headers:{
          Authorization:`Bearer ${token}`,
        }
      },
    );
    setUser(null);
    setToken(null)
    setLogin(false);   
    location.replace(`/register/login`)
  } catch (error) {
    setError(error.response?.data?.message); 
  } finally {
    setLoading(false); 
  }
};
export const login = async (data) => {
  const { setUser, setLoading ,setLogin,setToken,setError} = useStore.getState(); 

  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('password', data.password);

  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/login` ,
      formData
    );
    setUser(response.data.user);
    setToken(response.data.token)
    setLogin(true);   
    location.replace(`${response.data.user.role===null?'/register/select-user':null}`)
    location.replace(`${response.data.user.role==='company'?'/community':'/'}`)
  } catch (error) {
    setError(error.response?.data?.message || "error"); 
error.replace?.data?.message==="Please verify your email first."?console.log('d'):console.log('f')
  } finally {
    setLoading(false); 
  }
};



export const Register = async (data) => {
  const { setUser, setLoading ,setToken,setError} = useStore.getState(); 

  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.append('password_confirmation', data.password_confirmation);
    setUser(data);   

  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/register` ,
      formData
    );
    setToken(response.data.token)
    location.replace('/register/sign/verify')
  } catch (error) {
    setError(error.response?.data?.message || "حدث خطأ في تسجيل الدخول"); 

  } finally {
    setLoading(false); 

  }
};






export const verifyEmail = async (data) => {
  const {  setLoading ,user,setError} = useStore.getState(); 

  const formData = new FormData();
  formData.append('email', user.email);
  formData.append('code', data.code);

  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/verify-email` ,
      formData,
    );
    setUser(response.data);   
    location.replace('/register/select-user')
  } catch (error) {
    setError(error.response?.data?.message || "حدث خطأ في تسجيل الدخول"); 

  } finally {
    setLoading(false); 

  }
};





export const selectRole = async (data) => {
  const {  setLoading ,token,setError} = useStore.getState(); // ✅ استخدم getState

  const formData = new FormData();
  formData.append('role', data);

  try {
    setLoading(true);   
    const response = await axios.post(
      `${base}api/select-role` ,
      formData,
                  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    location.replace(`{/register/${formData}}`)
  } catch (error) {
    setError(error.response?.data?.message || "حدث خطأ في تسجيل الدخول"); 
  } finally {
    setLoading(false); 

  }
};



export const studentRegister = async (data,interestsArray) => {
  const { setUser, setLoading, setError ,token} = useStore.getState(); // ✅ استخدم getState

  const formData = new FormData();
  formData.append('profile_image', data.profile_image[0]);
  formData.append('gender', data.gender);
  formData.append('education_level', data.education_level);
  formData.append('date_of_birth', data.date_of_birth);
  formData.append('interests', interestsArray);

  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/profile/student` ,
      formData,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        },

      }
    );
    setUser(response.data.data)
    location.replace('/')
  } catch (error) {
    setError(error.response?.data?.message || "حدث خطأ في تسجيل الدخول"); 

  } finally {
    setLoading(false); 

  }
};
export const instructorRegister = async (data,skillsArray) => {
  const { setUser, setLoading, setError ,setLogin,token} = useStore.getState(); // ✅ استخدم getState

  const formData = new FormData();
  formData.append('profile_image', data.profile_image[0]);
  formData.append('bio', data.bio);
  formData.append('skills', skillsArray);
  formData.append('education_background', data.education_background);
  formData.append('years_of_experience', data.years_of_experience);
  formData.append('linkedin_url', data.linkedin_url);
  formData.append('portfolio_url', data.portfolio_url);

  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/profile/instructor` ,
      formData,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        },

      }
    );
    setUser(response.data.data)
    setLogin(true);   
    location.replace('/')
  } catch (error) {
    setError(error.response?.data?.message || "حدث خطأ في تسجيل الدخول"); 

  } finally {
    setLoading(false); 

  }
};

export const companyRegister = async (data) => {
  const { setUser, setLoading, setError ,setLogin,token} = useStore.getState(); // ✅ استخدم getState

  const formData = new FormData();
  formData.append('company_logo', data.company_logo[0]);
  formData.append('company_name', data.company_name);
  formData.append('industry', data.industry);
  formData.append('company_description', data.company_description);
  formData.append('website_url', data.website_url);
  formData.append('contact_person_name', data.contact_person_name);
  formData.append('company_size', data.company_size);

  try {
    setLoading(true);   

    const response = await axios.post(
      `${base}api/profile/company` ,
      formData,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        },

      }
    );
    setUser(response.data.data)
    setLogin(false);   
    location.replace('/')
  } catch (error) {
    setError(error.response?.data?.message  ); 

  } finally {
    setLoading(false); 

  }
};

export const createCourse=async(data)=>{
  const {  setLoading,token,setError,setCourse} = useStore.getState(); // ✅ استخدم getState
  const formData = new FormData();
  formData.append('thumbnail', data.thumbnail[0]);
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('level', data.level);
  formData.append('category', data.category);


  try {

    setLoading(true);   
    const response = await axios.post(
      `${base}api/instructor/courses` ,
      formData,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    location.replace(`/courses/add/${response.data.data.id}`)
    setCourse(response.data.data);   
    setLoading(false);   
  } catch (error) {
    setError(error.response?.data?.message  ); 
  } finally {
    setLoading(false); 

  }}
export const createLesson=async(data)=>{
  const {  setLoading,token,setError,course} = useStore.getState(); // ✅ استخدم getState
  const randomId = Math.floor(Math.random() * 100000); 

  const formData = new FormData();
  // formData.append('thumbnail', data.thumbnail[0]);
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('video_url', data.video_url);
  formData.append('id', randomId);


  try {

    setLoading(true);   
    const response = await axios.post(
      `${base}api/instructor/courses/${course?.id}/lessons` ,
      formData,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    setError(error.response?.data?.message  ); 
  } finally {
    setLoading(false); 

  }}
export const getCourses=async()=>{


  const { token ,setCourses, setLoading,setError,user} = useStore.getState(); 
  try {
    setLoading(true);   
    const response = await axios.get(
      `${base}api/${user?.role==='instructor'?'instructor/courses':'public/courses'}`,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                          withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
setCourses( response.data.data);
} catch (error) {
    setError(error.response?.data?.message  ); 
  } 
   finally {
    setLoading(false); 
  }
}
export const getOneCourse=async(id)=>{

  const { setJob, setLoading,token,setError,setCourse,setLessons} = useStore.getState(); // ✅ استخدم getState
  try {
    setLoading(true)
    const response = await axios.get(
      `${base}api/public/courses/${id}/lessons` ,
            {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
                          withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
    setCourse(response?.data?.data?.course)
    setLessons(response.data.data.course.lessons)
    location.replace('/courses/course')
} catch (error) {
    setError(error.response?.data?.message  ); 
  }    finally {
    setLoading(false); 

  }
}
export const getLessons=async(id)=>{

  const { course, setLoading,token,setError,setLessons} = useStore.getState(); // ✅ استخدم getState
  try {
    setLoading(true)
    const response = await axios.get(
      `${base}api/instructor/courses/${course?.id}/lessons` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                          withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
    setLessons(response.data.data)
    // location.replace('/courses/course')
} catch (error) {
    setError(error.response?.data?.message  ); 
  }    finally {
    setLoading(false); 

  }
}
export const updateCourse = async(data)=>{
  const {setLoading, setError ,token,course} = useStore.getState(); // ✅ استخدم getState


  try {
    setLoading(true)
    const response = await axios.put(
      `${base}api/instructor/courses/${course.id}` ,
      data,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getCourses()
  } catch (error) {
    setError(error.response?.data?.message  ); 
  } finally{
        setLoading(false)

  }
}
export const deleteCourse=async()=>{
  const {  setLoading,token,setError,course} = useStore.getState(); // ✅ استخدم getState
  
  try {
setLoading(true)
    const response = await axios.delete(
      `${base}api/instructor/courses/${course?.id}` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
location.replace('/courses')
} catch (error) {
    setError(error.response?.data?.message  ); 
  } 
     finally {
    setLoading(false); 

  }
}

export const applyJob = async(data)=>{
  const {setLoading,job,handleClose, setError,token} = useStore.getState(); // ✅ استخدم getState
const formData = new FormData();
  formData.append('resume_url', data.resume_url);
  try {
    setLoading(true)
    const response = await axios.post(
      `${base}api/student/job-postings/${job?.id}/apply` ,
      formData,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    handleClose()
  } catch (error) {
    handleClose()
    
    setError(error?.response?.data?.message)
  } 
       finally {
    setLoading(false); 

  }
}
export const selectApplicant = async(data)=>{
  const {setLoading,job,handleClose, setError,token,applicant} = useStore.getState(); // ✅ استخدم getState
  try {
    setLoading(true)
    const response = await axios.put(
      `${base}api/company/applications/${applicant?.id}?status=${data}` ,
      {},
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getApplicants()
    // location.replace('/Applicants')
  } catch (error) {
    setError(error?.response?.data?.message)
  } 
       finally {
    setLoading(false); 

  }
}
export const createJob = async(data)=>{
  const {setLoading, setError ,token} = useStore.getState(); // ✅ استخدم getState


  try {
    setLoading(true)
    const response = await axios.post(
      `${base}api/company/job-postings` ,
      data,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    location.replace('/jobs')
  } catch (error) {
    setError(error.response?.data?.message  ); 
  } 
         finally {
    setLoading(false); 

  }
}
export const getJobs=async()=>{


  const { token,setJobs,user,setLoading} = useStore.getState(); 
  try {
    setLoading(true)
    const response = await axios.get(
      `${base}api/${user.role==='company'?'company/job-postings':'public/job-postings'}` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                  withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
setJobs( response.data.data);
} catch (error) {
    setError(error.response?.data?.message  ); 
  } finally{
    setLoading(false)
  }

  
}
export const getOneJob=async(id)=>{

  const { setJob, setLoading, setError, token,user} = useStore.getState(); // ✅ استخدم getState
  try {
    setLoading(true)
    const response = await axios.get(
      `${base}api/${user.role==='company'?'company/job-postings':'student/applications'}/${id}` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                          withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
    setJob(response.data.data)

} catch (error) {
    setError(error.response?.data?.message  ); 
return error.message
  } finally{
        setLoading(false)

  }
}
export const updateJob = async(data)=>{
  const {setLoading, setError ,token,job} = useStore.getState(); // ✅ استخدم getState


  try {
    setLoading(true)
    const response = await axios.put(
      `${base}api/company/job-postings/${job.id}` ,
      data,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    getJobs()
  } catch (error) {
    setError(error.response?.data?.message  ); 
  } finally{
        setLoading(false)

  }
}

export const deleteJob=async(id)=>{
  const {  setLoading, setError ,token} = useStore.getState(); // ✅ استخدم getState
  
  try {
setLoading(true)
    const response = await axios.delete(
      `${base}api/company/job-postings/${id}` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
getJobs()
} catch (error) {
    setError(error.response?.data?.message  ); 
  }  finally{
        setLoading(false)

  }
}
export const getApplicants=async(id)=>{

  const {  setLoading, setError,token,setApplicants} = useStore.getState(); // ✅ استخدم getState

  try {
    setLoading(true)
    const response = await axios.get(
      `${base}api/company/job-postings/${id}/applications` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                          withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
    setApplicants( response.data.data)
    location.replace('/Applicants')
} catch (error) {
    setError(error.response?.data?.message  ); 
  }  finally{
        setLoading(false)

  }
}


export const createPost = async(data)=>{
  const {setLoading, setError ,token,handleClose} = useStore.getState(); // ✅ استخدم getState


  try {
    setLoading(true)
    const response = await axios.post(
      `${base}api/community/posts` ,
      data,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
getPosts()
handleClose()
  } catch (error) {
    setError(error.response?.data?.message  ); 
  }   finally{
        setLoading(false)

  }
}
export const getPosts=async()=>{


  const {setLoading,setError, token,setPosts} = useStore.getState(); 

  try {
setLoading(true)
    const response = await axios.get(
      `${base}api/community/posts` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                  withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
setPosts( response.data.data);
} catch (error) {
    setError(error.response?.data?.message  ); 
  }  finally{
        setLoading(false)

  }
}
export const getPost=async(id)=>{


  const {setLoading, token,setError,setPost} = useStore.getState(); 

  try {
setLoading(true)
    const response = await axios.get(
      `${base}api/community/posts/${id}` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                  withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
setPost( response.data.data);
} catch (error) {
    setError(error.response?.data?.message  ); 
  } 
  finally{
        setLoading(false)

  }
}
export const getComments=async(id)=>{


  const { token,setComments,handleOpen,setCommunityFlow,setLoading,setError} = useStore.getState(); 

  try {
setLoading(true)
    const response = await axios.get(
      `${base}api/community/posts/${id}/comments` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                  withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
setComments( response.data.data);
setCommunityFlow('comment')
handleOpen()

} catch (error) {
    setError(error.response?.data?.message  ); 
  }  finally{
        setLoading(false)

  }
}
export const createComment=async(data)=>{
  
  
  const {setLoading, token,post,setError} = useStore.getState(); 
  try {
    setLoading(true)
    const response = await axios.post(
      `${base}api/community/posts-create/${post?.id}/comments` ,
data,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
                  withCredentials: true // بس لو بتتعامل مع كوكيز، مش ضروري مع bearer tokens

      }
    );
    getComments(post?.id)
    getPosts(post?.id)


} catch (error) {
    setError(error.response?.data?.message  ); 
  } finally{
        setLoading(false)

  }
}
export const deletePost=async(id)=>{
  const { setLoading, setError ,token} = useStore.getState(); // ✅ استخدم getState
  
  try {
setLoading(true)
    const response = await axios.delete(
      `${base}api/community/posts/${id}` ,
            {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
getPosts()
} catch (error) {
    setError(error.response?.data?.message  ); 
  } finally{
        setLoading(false)

  }
}


