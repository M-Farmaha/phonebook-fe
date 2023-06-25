import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/authApi';
import { getToken } from 'redux/selectors';
import {
  UserInfoButton,
  UserInfoProfile,
  UserInfoText,
  UserInfoTextSpan,
  UserInfoWrap,
} from './styled';
import { useGetContactsQuery } from 'redux/contactsApi';

export const UserInfo = () => {
  const token = useSelector(getToken);
  const currentUser = useGetCurrentUserQuery(token);
  const { data } = useGetContactsQuery(token);

  return (
    token && (
      <>
        <UserInfoWrap>
          <UserInfoProfile>
            <UserInfoButton type="button">
              {currentUser?.data?.name.slice(0, 1).toUpperCase()}
            </UserInfoButton>
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
