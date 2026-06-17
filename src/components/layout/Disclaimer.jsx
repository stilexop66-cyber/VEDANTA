import { useState } from "react";
import "./Disclaimer.css";


const Disclaimer = () => {


  const [show, setShow] = useState(
    localStorage.getItem("agree") !== "yes"
  );


  const agreeClick = () => {

    localStorage.setItem("agree","yes");

    setShow(false);

  };


  if(!show){
    return null;
  }



  return (

    <div className="overlay">


      <div className="disclaimer">


        <h2>
          Legal Disclaimer
        </h2>



        <p>
In accordance with the rules of the Bar Council of India, we are not permitted to solicit work or advertise our services. By clicking the “I Agree” button, you acknowledge and confirm that no advertisement, solicitation, personal communication, invitation, or inducement of any kind has been made by us or any member of our firm to attract work through this website; that you are accessing this site solely to understand our firm’s offerings for your own information and use; that any specific information provided is at your request; that any material downloaded or information obtained from this website is entirely at your own volition; and that your use of this site does not create any lawyer-client relationship. The content on this website is intended strictly for general informational purposes and should not be interpreted as legal advice, solicitation, or an advertisement. We accept no liability for any consequences arising from any action taken or decision made by you in reliance on the information or materials available here, and you are strongly advised to seek independent legal advice for any legal matter.
        </p>



       



        <button onClick={agreeClick}>
          I Agree
        </button>



      </div>


    </div>

  );


};


export default Disclaimer;