import {
  ContactInfoButtonFilter,
  ContactInfoButtonInModal,
  UserModalText,
  UserModalTextSpan,
  UserModalTextWrap,
} from './StyledComponents';

import { getRandomColor } from 'getRandomColor';

export const UserModalContent = ({ userInfo }) => {
  return (
    <>
      <ContactInfoButtonInModal
        type="button"
        disabled
        style={{
          backgroundColor: getRandomColor(userInfo.name),
        }}
      >
        <ContactInfoButtonFilter>
          {userInfo.name.slice(0, 1).toUpperCase()}
        </ContactInfoButtonFilter>
      </ContactInfoButtonInModal>
      <UserModalTextWrap>
        <UserModalText>
          User: <UserModalTextSpan>{userInfo.name}</UserModalTextSpan>
        </UserModalText>
        <UserModalText>
          E-mail: <UserModalTextSpan>{userInfo.email}</UserModalTextSpan>
        </UserModalText>
      </UserModalTextWrap>
    </>
  );
};
