import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import styled from "styled-components";

const Captcha = () => {
  function onChange(value) {
    console.log("Captcha value : ", value);
  }
  const recaptchaRef = React.createRef();
  return (
    <RecaptchaBox>
      <ReCAPTCHA
        sitekey="6LfC43AjAAAAAFsIRB9MQotLujbjCOGPV6TmJhV_"
        onChange={onChange}
      />
    </RecaptchaBox>
  );
};
export default Captcha;

const RecaptchaBox = styled.div`
  width: 100%;
`;
