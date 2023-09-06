import styled, { keyframes } from 'styled-components';
import { MdDelete, MdEdit, MdClose } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';

export const Blur = keyframes`
  0% {opacity: 1}
  100% {opacity: 0.1}
`;

export const BlurDiv = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  animation-name: ${Blur};
  animation-duration: 350ms;
`;

export const ModalBlur = keyframes`
  0% {opacity: 1}
  100% {opacity: 0}
`;

export const ModalBlurDiv = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  animation-name: ${ModalBlur};
  animation-duration: 250ms;
`;

export const ModalBodyBlur = keyframes`
  0% {
    filter: blur(40px);
  }

  100% {
    filter: blur(0px);
  }
`;

export const Section = styled.div`
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
  padding-bottom: 50px;

  transition: ${props => props.theme.transition};
`;

export const Header = styled.header`
  height: 80px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 8888;
  background-color: ${props => props.theme.headerBG};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.theme.headerShadow};

  transition: ${props => props.theme.transition};
`;

export const NavWrap = styled.nav`
  margin-left: auto;
  margin-right: auto;
  max-width: 440px;
  height: 100%;

  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const NavList = styled.ul`
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.li`
  height: 100%;
  min-width: 66px;
`;

export const NavLinkStyled = styled(NavLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.primaryTextColor};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.hoverTextColor};
  }
  &.active {
    color: ${props => props.theme.disabledTextColor};
    cursor: default;
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 16px;
  color: ${props => props.theme.primaryTextColor};

  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.hoverTextColor};
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PhonebookTitle = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.primaryTextColor};

  transition: ${props => props.theme.transition};
`;

export const SubTitle = styled.p`
  font-size: 11px;
  font-style: inherit;
  color: ${props => props.theme.disabledTextColor};

  transition: ${props => props.theme.transition};
`;

export const TitleLink = styled.a`
  font-style: inherit;
  color: ${props => props.theme.disabledTextColor};

  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.hoverTextColor};
  }
`;

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 200px;
  height: 36px;
  padding: 0px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;

  color: ${props => props.theme.primaryTextColor};
  background-color: ${props => props.theme.inputBG};
  box-shadow: ${props => props.theme.inputShadow};

  transition: ${props => props.theme.transition};

  &:focus {
    background-color: ${props => props.theme.inputBGFocus};
    box-shadow: ${props => props.theme.inputShadowFocus};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  width: 150px;
  height: 36px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.primaryTextColor};
  background-color: transparent;

  border-radius: 5px;
  border: none;
  padding: 8px 20px;
  box-shadow: ${props => props.theme.buttonShadow};

  transition: ${props => props.theme.transition};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;

    color: ${props => props.theme.hoverTextColor};
    box-shadow: ${props => props.theme.buttonShadowFocus};
  }
  &:disabled {
    cursor: default;
    color: ${props => props.theme.disabledTextColor};
    box-shadow: ${props => props.theme.buttonShadow};

    transition: ${props => props.theme.transitionDisabled};
  }
`;

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;

  color: ${props => props.theme.primaryTextColor};
  background-color: transparent;
  border-radius: 5px;
  border: 3px solid rgba(255, 255, 255, 0.05);
  padding: 4px;
  box-shadow: ${props => props.theme.contactButtonShadow};

  transition: ${props => props.theme.transition};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    border: 3px solid rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.hoverTextColor};
    box-shadow: ${props => props.theme.contactButtonShadowFocus};
  }

  &:disabled {
    cursor: default;
    border: 3px solid transparent;
    color: ${props => props.theme.disabledTextColor};
    box-shadow: ${props => props.theme.contactButtonShadow};

    transition: ${props => props.theme.transitionDisabled};
  }
`;

export const SecureButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  color: ${props => props.theme.primaryTextColor};
  background-color: transparent;
  border-radius: 5px;
  border: 3px solid transparent;
  padding: 6px;

  box-shadow: ${props => props.theme.secureButtonShadow};

  transition: ${props => props.theme.transition};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;

    color: ${props => props.theme.hoverTextColor};
    box-shadow: ${props => props.theme.secureButtonShadowFocus};
  }
`;

export const DeleteIcon = styled(MdDelete)`
  width: 24px;
  height: 24px;
`;

export const EditIcon = styled(MdEdit)`
  width: 24px;
  height: 24px;
`;

export const CloseIcon = styled(MdClose)`
  width: 24px;
  height: 24px;
`;

export const ShowPasswordIcon = styled(AiFillEye)`
  width: 24px;
  height: 24px;
`;

export const HidePasswordIcon = styled(AiFillEyeInvisible)`
  width: 24px;
  height: 24px;
`;

export const ContactListWrap = styled.ul`
  overflow: hidden;
  backdrop-filter: blur(8px);
  border-radius: 10px;

  max-width: 440px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column-reverse;

  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${props => props.theme.contactsShadow};

  transition: ${props => props.theme.transition};
`;

export const ContactItemWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  padding: 8px 10px;

  &:nth-child(even) {
    background-color: transparent;
    box-shadow: rgba(70, 70, 70, 0.05) 0px -2px 6px 0px inset,
      rgba(70, 70, 70, 0.05) 0px 2px 6px 0px inset;
  }

  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ContactName = styled.p`
  width: 140px;
  min-width: 60px;

  hyphens: manual;
  overflow-wrap: break-word;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.primaryTextColor};
  text-align: left;

  transition: ${props => props.theme.transition};
`;

export const ContactNumber = styled.p`
  width: 140px;
  min-width: 60px;

  hyphens: manual;
  overflow-wrap: break-word;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.primaryTextColor};
  text-align: left;

  transition: ${props => props.theme.transition};
`;

export const ErrorWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.p`
  font-weight: 700;
  font-size: 50px;
  color: ${props => props.theme.primaryTextColor};

  transition: ${props => props.theme.transition};
`;

export const UserInfoWrap = styled.div`
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfoText = styled.p`
  color: ${props => props.theme.primaryTextColor};
  font-size: 16px;
  font-weight: 400;

  transition: ${props => props.theme.transition};
`;

export const UserInfoTextSpan = styled.span`
  color: ${props => props.theme.primaryTextColor};
  font-size: 16px;
  font-weight: 600;

  transition: ${props => props.theme.transition};
`;

export const UserInfoProfile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContactInfoButton = styled.button`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 34px;
  max-width: 34px;
  width: 34px;
  height: 34px;

  margin-right: 5px;

  border-radius: 50%;
  border: none;

  font-family: inherit;
  font-size: 18px;
  font-weight: 700;

  color: ${props => props.theme.alternativeTextColor};
  filter: contrast(1);

  transition: ${props => props.theme.transition};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;

    filter: contrast(${props => props.theme.contrastFocus});
  }

  &:disabled {
    cursor: default;
    filter: contrast(1);
  }
`;

export const ContactInfoButtonFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 60px;
  min-height: 60px;

  background: linear-gradient(120deg, #f4f9ffaa, #9598caaa);
`;

export const ContactInfoButtonInModal = styled.button`
  overflow: hidden;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  max-width: 60px;
  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: none;

  font-family: inherit;
  font-size: 30px;
  font-weight: 700;

  color: ${props => props.theme.alternativeTextColor};

  &:disabled {
    cursor: default;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  animation-name: ${ModalBodyBlur};
  animation-duration: 250ms;

  transition: ${props => props.theme.transition};
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  border-radius: 10px;
  border-style: outset;
  border-width: 1px;
  border-color: ${props => props.theme.modalBorderColor};
  background: ${props => props.theme.mainBGGradient};

  box-shadow: rgba(31, 39, 64, 0.1) 4px 2px 20px 0px;

  transition: ${props => props.theme.transition};
`;

export const UserModalTextWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const UserModalText = styled.p`
  font-weight: 700;
  color: ${props => props.theme.primaryTextColor};

  transition: ${props => props.theme.transition};
`;

export const UserModalTextSpan = styled.span`
  max-width: 200px;
  font-weight: 400;

  hyphens: manual;
  overflow-wrap: break-word;
`;
