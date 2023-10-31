import { useGetUsersQuery } from "../../services/api";
import { User } from "./component";

export const UserContainer = ({userId}) => {
  const {data: users, isSuccess: isUsersLoaded} = useGetUsersQuery();

  return isUsersLoaded ? <User user={users.find(({id}) => userId === id)}/> : null;
}
