import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/authApi';
import { getToken } from 'redux/selectors';
import {
  ContactInfoButton,
  ContactInfoButtonFilter,
  UserInfoProfile,
  UserInfoText,
  UserInfoTextSpan,
  UserInfoWrap,
} from './StyledComponents';
import { useGetContactsQuery } from 'redux/contactsApi';
import { getRandomColor } from 'getRandomColor';
import { useContext } from 'react';
import { Context } from './Layout';
import { ButtonUserLoader } from './Loaders';

export const UserInfo = () => {
  const token = useSelector(getToken);
  const { setUserInfo, openModal } = useContext(Context);

  const currentUser = useGetCurrentUserQuery(token);
  const { data } = useGetContactsQuery(token);

  return (
    token && (
      <>
        <UserInfoWrap>
          <UserInfoProfile>
            <ContactInfoButton
              style={{
                width: '40px',
                height: '40px',
                minWidth: '40px',
                maxWidth: '40px',
                backgroundColor: getRandomColor(currentUser?.data?.name),
              }}
              type="button"
              disabled={!currentUser.isSuccess}
              onClick={() => {
                setUserInfo(currentUser?.data);
                openModal();
              }}
            >
              {' '}
              <ContactInfoButtonFilter>
                {currentUser.isSuccess ? (
                  currentUser?.data?.name.slice(0, 1).toUpperCase()
                ) : (
                  <ButtonUserLoader />
                )}
              </ContactInfoButtonFilter>
            </ContactInfoButton>
            <UserInfoTextSpan>{currentUser?.data?.name}</UserInfoTextSpan>
          </UserInfoProfile>

          <UserInfoText>
            Contacts:{' '}
            <UserInfoTextSpan>{data ? data.length : '0'}</UserInfoTextSpan>
          </UserInfoText>
        </UserInfoWrap>
      </>
    )
  );
};
