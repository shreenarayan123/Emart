import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../context/AuthContext";
import { setToken } from "../../helpers";
import './SignIn.scss';
import axios from "../../api/axios";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const SignIn = () => {

    
    const navigate = useNavigate();
    
    const { setUser } = useAuthContext();
    
  
    const userRef = useRef();
    const errRef = useRef();

    const [users, setUsers] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

   

    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(users));
    }, [users])
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])

    const notify = () => {
       
  
        toast.success("You are Signed in !", {
          position: toast.POSITION.TOP_CENTER
        });
  
       
      };
    const errnoti = () => {
       
  
        toast.error("Invalid Username or Email id  !", {
          position: toast.POSITION.TOP_CENTER
        });
  
       
      };
    const srerr = () => {
       
  
        toast.error("Server error !", {
          position: toast.POSITION.TOP_CENTER
        });
  
       
      };

    useEffect(() => {
        setErrMsg('');
    }, [users,  pwd])

    const handleSubmit = async (values) => {
        values.preventDefault();
        
        

        try {
            setSuccess(true);
             
            const value = {
              identifier:users,
              password: pwd,
            };
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`,{...value}, {
           

             
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              
            });
           
            notify();
           
           
         

            const data =  response;
            
            if (data?.error) {
              throw data?.error;
            } else {
              // set the token
              setToken(data.data.jwt);
             
              // set the user
              setUser(data.data.user);
             
      
              navigate("/", { replace: true });
            }
        } catch (error) {
          console.error(error);
          if (!error?.response) {
            setErrMsg('No Server Response');
        } else if (error.response?.status === 400) {
          errnoti();
           
        }else  {
          srerr();
          
        }
          setSuccess(false);
        } 
      };
       
     
        
    

    return (
        <>
            {success ? (
                
               
               navigate("/", { replace: true })
               
            ) : (
                <div className="login-wrapper">
                  <ToastContainer/>
                  <div className="login">
                  
     
                 <section className="signin" >
                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                   <div className="title">SignIn</div >
                     <form onSubmit={handleSubmit}>
                         <label htmlFor="username">
                             Username:
                             <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                             <FontAwesomeIcon icon={faTimes} className={validName || !users ? "hide" : "invalid"} />
                         </label>
                         <input
                             type="text"
                             id="username"
                             ref={userRef}
                             autoComplete="off"
                             onChange={(e) => setUsers(e.target.value)}
                             value={users}
                             required
                             aria-invalid={validName ? "false" : "true"}
                             aria-describedby="uidnote"
                             onFocus={() => setUserFocus(true)}
                             onBlur={() => setUserFocus(false)}
                         />
                         <p id="uidnote" className={userFocus && users && !validName ? "instructions" : "offscreen"}>
                             <FontAwesomeIcon icon={faInfoCircle} />
                             4 to 24 characters.<br />
                             Must begin with a letter.<br />
                             Letters, numbers, underscores, hyphens allowed.
                        </p>
                           <label htmlFor="password">
                             Password:
                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                         </label>
                         <input
                             type="password"
                             id="password"
                             onChange={(e) => setPwd(e.target.value)}
                             value={pwd}
                             required
                             aria-invalid={validPwd ? "false" : "true"}
                             aria-describedby="pwdnote"
                             onFocus={() => setPwdFocus(true)}
                             onBlur={() => setPwdFocus(false)}
                         />
                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                             <FontAwesomeIcon icon={faInfoCircle} />
                             8 to 24 characters.<br />
                             Must include uppercase and lowercase letters, a number and a special character.<br />
                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                         </p>
 
 
                       
                        <button disabled={!validName || !validPwd  ? true  : false} onClick={handleSubmit} >Sign In
                        </button>
                       
                     </form>
                     <p className="alregis">
                         Don't have an account<br />
                         <span className="line">
                            
                             <a href="/signup">Sign Up </a>
                         </span> 
                         here<br/>
                     </p>
                 </section>
                 <img src="\img\signin-image.jpg" alt="signin" />
                 </div>
                </div>
            )}
        </>
    )
}

export default SignIn


                   
                  