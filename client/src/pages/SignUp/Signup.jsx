


import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SignUp.scss';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import {setToken} from "../../helpers";
import {useNavigate} from 'react-router-dom';

import axios from "../../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9]{3,}@[A_Za-z]{3,15}[.]{1}[A-Za-z.]{2,6}$/;



const Signup = () => {

    

    const navigate = useNavigate();
    
    const userRef = useRef();
    const errRef = useRef();

    const [users, setUsers] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    
    

    useEffect(() => {
        setValidName(USER_REGEX.test(users));
    }, [users])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        
    }, [pwd])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
       
    }, [email])

    useEffect(() => {
        setErrMsg('');
    }, [users, pwd, email])


    const notify = () => {
      
  
        toast.success("You are successfully Signed Up to Emart !", {
          position: toast.POSITION.TOP_CENTER
        });
  
       
      };
    const errornoti = () => {
       
  
        toast.error("This username or email has already taken , signin if its you", {
          position: toast.POSITION.TOP_CENTER
        });
  
       
      };
    const srerror = () => {
       
  
        toast.error("Server Error, Registeration failed.!!", {
          position: toast.POSITION.TOP_CENTER
        });
  
       
      };
     
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const values ={
            username:users,
            password:pwd, 
             email:email
         }
    
        
        try {
            setSuccess(true);
           
            
                
            const response = await axios.post(`http://localhost:1337/api/auth/local/register`,{...values},{ 

                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
            
            }
            
            );
           
            notify();
      
            const data = response;
            if (data?.error) {
              throw data?.error;
            } else {
              // set the token
              setToken(data.data.jwt);
             
              // set the user
              

              navigate("/", { replace: true });
              window.location.reload();
              notify();
      
            }
          } catch (error) {
           
            console.error(error);
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                    errornoti();
              
              
            } else {
                srerror();
            }
           
          setSuccess(false);
          
        } 
  
    }

    return (
        <>
        
            {success ? (

               navigate("/signin", { replace: true })
               
            ) : (
                <div className="registration">
                    <ToastContainer/>
                <section className="signup" >
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <div className="title">SignUp</div >
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

                       <label htmlFor="email">
                            Email address:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                           
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="eidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="eidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Invalid Email Address.<br />
                            
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


                        <button disabled={!validName || !validPwd || !validEmail ? true : false}  >Sign Up</button>
                    </form>
                    <p className="alregis">
                        Already registered?<br />
                        <span className="line">
                           
                            <a href="/signin">Sign In</a>
                        </span>
                    </p>
                </section>
                </div>
            )}
        </>
    )
}

export default Signup

