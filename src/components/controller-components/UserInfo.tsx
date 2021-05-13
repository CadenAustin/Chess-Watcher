import React, { ReactElement, useEffect } from "react";

import { useGetUser } from "../../hooks/api-components/useGetUser";
import { UserCard } from "../user-components/UserCard";

interface Props {
	match: any;
}

function UserInfo(props: Props): ReactElement {
	const { match } = props;
	const username = match.params.name;
	const [user, loading, error, fetchUser] = useGetUser();

	useEffect(() => {
		const fetchAndSet = async () => {
			await fetchUser(username);
		};
		fetchAndSet();
	}, [username, fetchUser]);

	return (
		<div>
			{error ? (
				<h1>Error Fetching User</h1>
			) : loading || !user ? (
				<h1>Loading</h1>
			) : (
				<UserCard user={user} />
			)}
		</div>
	);
}

export default UserInfo;
