import React, {useState, useEffect} from "react";
import countriesList from "./countries";
import NumericInput from "../comps/NumericInput";
import Cover from "../comps/cover";
import Toast from "../helpers/functions";


function AccountPage(props){

    const [view, setView] = useState("numview");
    const [loading, setLoading] = useState(false);
    const [mod, setMod] = useState("sendcode");
    const [dialCode, setDialCode] = useState("+92");
    const [phone, setPhone] = useState(null);
    const [verificationcode, setVerificationCode] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);

      useEffect(()=>{
        if(!window.recaptchaverifier){
            window.recaptchaverifier = new global.firebase.auth.RecaptchaVerifier("__phonesigner__");
            window.recaptchaverifier.render().then(wid => {
                window.widgetID = wid;
            });
        }
    });
    const signin = () => {
      if(phone == null){
          Toast.ToastMethod.show({html: "Enter your phone number"});
      }else{
          setLoading(true);
          Toast.ToastMethod.dismisAll();
          var appverifier = window.recaptchaverifier,
          phoneNumber = dialCode + phone;
          global.firebase.auth().signInWithPhoneNumber(phoneNumber, appverifier)
          .then(confirmation => {
              setConfirmationResult(confirmation);
              setVerificationCode(null);
              setMod("verifycode");
              setLoading(false);
          })
          .catch(err => {
              console.log(err);
              setLoading(false);
              switch(err.code){
                  case "auth/invalid-phone-number":
                          Toast.ToastMethod.show({html: "That number is not valid. Please provide a valid phone number..."});                            
                      break;
                      default: 
                          Toast.ToastMethod.show({html: "We are unable to process your request at this time!"});
              }
          });
      }
  }
  const verify =() => {
    if(verificationcode == null){
        Toast.ToastMethod.show({html: "Enter verification code"});
    }else{
        setLoading(true);
        confirmationResult.confirm(verificationcode)
        .then(result => {
            console.log(("You are signed in..."));
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            Toast.ToastMethod.show({html: "Invalid confirmation code..."});
        });
    }
}
const verifyCodeView = () => {
  return (
      <div className="oauth-view oauth-view-verify rel">

          {loading == true && <Cover />}

          <h1 className="s40 otitle fontb">Verify Phone Number</h1>
          <h1 className="s18 oline fontn">Enter verifcation code sent to <span className="fontb">{dialCode + phone}</span></h1>

          <NumericInput defaultValue={verificationcode} onChange={e => {setVerificationCode(e.target.value == "" ? null : e.target.value)}} placeholder="XXXXXX" className="iput s24 fontb" />

          <button onClick={()=>{verify()}} className="button s24 fontb cfff">Continue</button>

      </div>
  )
}
const sendCodeView = () => {
  return (
      <div className="oauth-view rel">

          {loading == true && <Cover />}

          <h1 className="s40 otitle fontb">Sign in</h1>
          <h1 className="s18 oline fontn">Enter your phone number and we will send one-time verifcation code</h1>

          <select defaultValue={dialCode} 
              onChange={e => {setDialCode(e.target.value == "" ? null : e.target.value)}}
              className="iput s24 fontb">
              {
                  countriesList.map(e => {
                      return (
                          <option 
                          key={e.name}
                          value={e.dial_code}>{e.name} ({e.dial_code})</option>
                      )
                  })
              }
          </select>

          <NumericInput defaultValue={phone} onChange={e => {setPhone(e.target.value == "" ? null : e.target.value)}} placeholder="0300 123 4567" className="iput s24 fontb" />
          <button onClick={()=>{signin()}} className="button s24 fontb cfff">Continue</button>

            </div>
        )
    }
    return (
      mod == "sendcode" ? sendCodeView() : verifyCodeView()
  )

}

export default AccountPage;