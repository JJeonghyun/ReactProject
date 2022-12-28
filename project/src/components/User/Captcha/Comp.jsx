import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import styled from "styled-components";

const Captcha = ({ setToken }) => {
  function onChange(value) {
    setToken(value);
  }
  const recaptchaRef = React.createRef();
  return (
    <RecaptchaBox>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LcSvbIjAAAAAH93615FuYvbC0ey3kAmA1eI22Oe"
        onChange={onChange}
      />
    </RecaptchaBox>
  );
};
export default Captcha;

const RecaptchaBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;
