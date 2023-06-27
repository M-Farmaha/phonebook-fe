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
} from './styled';
import { useGetContactsQuery } from 'redux/contactsApi';
import { getRandomColor } from 'getRandomColor';

export const UserInfo = () => {
  const token = useSelector(getToken);
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
            >
              {' '}
              <ContactInfoButtonFilter>
                {currentUser?.data?.name.slice(0, 1).toUpperCase()}
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
