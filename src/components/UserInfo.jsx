import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/authApi';
import { getToken } from 'redux/selectors';
import { UserInfoText, UserInfoTextData, UserInfoWrap } from './styled';
import { useGetContactsQuery } from 'redux/contactsApi';

export const UserInfo = () => {
  const token = useSelector(getToken);
  const currentUser = useGetCurrentUserQuery(token);
  const { data } = useGetContactsQuery(token);

  return (
    token && (
      <>
        <UserInfoWrap>
          <UserInfoText>
            User: <UserInfoTextData>{currentUser?.data?.name}</UserInfoTextData>
          </UserInfoText>
          <UserInfoText>
            Contacts:{' '}
            <UserInfoTextData>{data ? data.length : '0'}</UserInfoTextData>
          </UserInfoText>
        </UserInfoWrap>
      </>
    )
  );
};
