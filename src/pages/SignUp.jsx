import React, { useContext, useState } from 'react'
import img from '../assets/img/SignUp.png'
import logo from '../assets/img/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import ApiLinkContext from '../context/ApiLinkContext'
import axios from 'axios'
import { loginApiLink } from '../utils/login'
import { saveUserData } from '../utils/user'

const SignUp = () => {

  const {apiLink , headers} = useContext(ApiLinkContext);
  const navigate = useNavigate()
  const [characterslenght, setCharacterlenght] = useState(false)
  const [cappitalletter, setCapitalletter] = useState(false)
  const [onesymbol, setOnesymbol] = useState(false)

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [name , setName] = useState(); 
  const [surname , setSurname] = useState(); 
  const [email , setEmail] = useState(); 
  const [phone , setPhone] = useState();
  const [address , setAdress] = useState();
  const [privacyCheck , setPrivacyCheck] = useState(false);
  


  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };



  const handleCase = (value) => {
    setCharacterlenght(value.length >= 8);
    setCapitalletter(/[A-Z]/.test(value));
    setOnesymbol(/[!. @#\$%\^&\*]/.test(value));
    setPassword(value)

    // if (characters.test(value)) {
    //   setCharacterlenght(true)
    // } else {
    //   setCharacterlenght(false)
    // }
    // if (capital.test(value)) {
    //   setCapitalletter(true)
    // } else {
    //   setCapitalletter(false)
    // }
    // if (symbol.test(value)) {
    //   setOnesymbol(true)
    // } else {
    //   setOnesymbol(false)
    // }


  }

  const passwordsMatch = password === confirmPassword;
  const isPasswordValid = characterslenght && cappitalletter && onesymbol;



const handleSubmit =(e)=>{
  e.preventDefault();
  

  if(!privacyCheck){
    alert("Check privacy policy !");
    throw new Error("Privacy policy checkbox is empty");
  }

  axios.post(`${loginApiLink}/user` , {
    'name': name,
    'surname': surname,
    'email': email,
    'phoneNumber': phone,
    'address' : address,
    'password': password
  })
  .then((res)=>{
    const response = res.data.data;
    saveUserData(response);
    // console.log(res);
    window.location.replace('/account/details');
    
  })
  .catch((e)=>{
    console.log(e);
  })


}


  return (
    <>
      <div className="signup">
        <div className="signup-card">
          <div className="signup-logo">
            <Link to={"/home"}><img src={logo} alt="" /></Link>
          </div>
          <div className="signup-card-main">
            <div className="signup-text">
              <h3>Create your account</h3>
              <p>It’s free and easy</p>
            </div>
            <div className="signup-form">
              <form>
                <div className="signup-input-text">
                  <label htmlFor="name"><p>Name</p></label>
                </div>
                <div className="signup-input">
                  <input id='name' placeholder='Enter your name' type='text'  onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="signup-input-text">
                  <label htmlFor="surname"><p>Surname</p></label>
                </div>
                <div className="signup-input">
                  <input id='surname' placeholder='Enter your surname' type='text' onChange={(e)=> setSurname(e.target.value)}/>
                </div>
                <div className="signup-input-text">
                  <label htmlFor="phone"><p>Phone</p></label>
                </div>
                <div className="signup-input">
                  <input id='phone' placeholder='Enter your phone' type='text' onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className="signup-input-text">
                  <label htmlFor="email"><p>Email</p></label>
                </div>
                <div className="signup-input">
                  <input id='email' placeholder='Enter your e-mail' type="email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="signup-input-text">
                  <label htmlFor="address"><p>Adress</p></label>
                </div>
                <div className="signup-input">
                  <input id='address' placeholder='Enter your adress' type="text" onChange={(e)=> setAdress(e.target.value)}/>
                </div>
                <div className="signup-input-text">
                  <label htmlFor="password"><p>Password</p></label>
                </div>
                <div className="signup-input">
                  <input id='password' placeholder='Enter your password' type='password' onChange={(e) => {
                    handleCase(e.target.value);
                    setPassword(e.target.value);
                  }} />
                </div>
                <div className="signup-input-text">
                  <label htmlFor="confirm-password"><p>Confirm password</p></label>
                </div>
                <div className="signup-input">
                  <input id='confirm-password' placeholder='Enter your password again' type="password" onChange={(e) => handleConfirmPasswordChange(e.target.value)} />
                </div>
                <p className='mt-1 text-danger'> {passwordsMatch ? '' : 'Passwords are not the same'}</p>
              </form>
            </div>
            <div className="signup-part2">
              <div className="part2-main">
                {characterslenght ? (
                  <span className='list-icon green'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#15CF74" />
                      <path d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#15CF74" />
                    </svg>
                  </span>
                ) : (
                  <span className='list-icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#D20409" />
                      <path d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z" fill="#D20409" />
                    </svg>
                  </span>
                )}
                <div className="main-text ms-2">At list 8 characters</div>
              </div>
              <div className="part2-main">
                <div className="main-btn">
                  {cappitalletter ? (
                    <span className='list-icon green'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#15CF74" />
                        <path d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#15CF74" />
                      </svg>
                    </span>
                  ) : (
                    <span className='list-icon'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#D20409" />
                        <path d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z" fill="#D20409" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="main-text ms-2">One capital letter</div>
              </div>
              <div className="part2-main">
                <div className="main-btn">
                  {onesymbol ? (
                    <span className='list-icon green'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#15CF74" />
                        <path d="M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#15CF74" />
                      </svg>
                    </span>
                  ) : (
                    <span className='list-icon'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#D20409" />
                        <path d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z" fill="#D20409" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="main-text ms-2">One symbol</div>
              </div>
              {/* <div className="part2-main">
                <div className="main-btn"></div>
                <div className="main-text ms-2">At list 8 characters</div>
              </div> */}
            </div>
            <div className="remember-me">
              <div className='remember-me-input'>
                <input type="checkbox" id='signup-checkbox' name='signup-checkbox' className='pt-2' required onChange={(e)=> setPrivacyCheck(e.target.checked)} />
                <label for="signup-checkbox"> <p className='ms-2 mb-2'>Remember me. By creating an account means you agree to the <Link className='remember-link'>Terms and Conditions</Link>, and our <Link className='remember-link'>Privacy Policy</Link></p> </label>
              </div>
            </div>

            <div className="signup-btn">
              <button className={`signin-btn-main ${isPasswordValid && passwordsMatch ? '' : 'disabled'}`} disabled={!isPasswordValid || !passwordsMatch}
                onClick={handleSubmit}
              >
                <p>Sign up</p>
              </button>
              <button className='signin-with-btn mt-2'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1589_3637)">
                    <path d="M20.4998 12.1777C20.4998 11.5219 20.4454 11.0432 20.3275 10.5469H12.6631V13.5072H17.1619C17.0712 14.2429 16.5815 15.3509 15.493 16.0954L15.4777 16.1945L17.9011 18.029L18.069 18.0454C19.6109 16.6538 20.4998 14.6063 20.4998 12.1777Z" fill="#4285F4" />
                    <path d="M12.6636 19.9776C14.8677 19.9776 16.718 19.2684 18.0695 18.0453L15.4935 16.0953C14.8042 16.5651 13.879 16.893 12.6636 16.893C10.5049 16.893 8.67273 15.5015 8.01961 13.5781L7.92387 13.5861L5.40405 15.4917L5.37109 15.5812C6.71348 18.1871 9.47086 19.9776 12.6636 19.9776Z" fill="#34A853" />
                    <path d="M8.01924 13.5763C7.84691 13.08 7.74717 12.5481 7.74717 11.9986C7.74717 11.449 7.84691 10.9172 8.01017 10.4209L8.00561 10.3152L5.4542 8.37891L5.37073 8.41771C4.81746 9.49907 4.5 10.7134 4.5 11.9986C4.5 13.2838 4.81746 14.4981 5.37073 15.5794L8.01924 13.5763Z" fill="#FBBC05" />
                    <path d="M12.6636 7.10791C14.1965 7.10791 15.2305 7.75494 15.8201 8.29565L18.1239 6.09749C16.709 4.81229 14.8677 4.02344 12.6636 4.02344C9.47086 4.02344 6.71348 5.81385 5.37109 8.4197L8.01054 10.4229C8.67273 8.4995 10.5049 7.10791 12.6636 7.10791Z" fill="#EB4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1589_3637">
                      <rect width="16" height="16" fill="white" transform="translate(4.5 4)" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Sing in with Google</p>
              </button>
              <button className='signin-with-btn mt-2'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5502 20.28C16.5702 21.23 15.5002 21.08 14.4702 20.63C13.3802 20.17 12.3802 20.15 11.2302 20.63C9.79016 21.25 9.03016 21.07 8.17016 20.28C3.29016 15.25 4.01016 7.59 9.55016 7.31C10.9002 7.38 11.8402 8.05 12.6302 8.11C13.8102 7.87 14.9402 7.18 16.2002 7.27C17.7102 7.39 18.8502 7.99 19.6002 9.07C16.4802 10.94 17.2202 15.05 20.0802 16.2C19.5102 17.7 18.7702 19.19 17.5402 20.29L17.5502 20.28ZM12.5302 7.25C12.3802 5.02 14.1902 3.18 16.2702 3C16.5602 5.58 13.9302 7.5 12.5302 7.25Z" fill="black" />
                </svg>
                <p>Sing in with Apple</p>
              </button>
            </div>
            <div className="signin-with">
            </div>
            <div className="gosignup">
              <p>Already have an account? </p><button onClick={() => { navigate('/login') }}>Sign in</button>
            </div>
          </div>
        </div>
        <div className="signup-img">
          <div className="image-container">
            <img src={img} alt="" className='img-fluid' />
            <div className="image-overlay">
              <h1>WELCOME TO ORMADO KAFFEEHAUS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp