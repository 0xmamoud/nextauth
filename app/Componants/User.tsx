import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Logout from "./LogoutBtn";

export default async function User() {
	const session = await getServerSession(authOptions);
	if (!session?.user) {
		return <p>Not found user</p>;
	}

	return (
		<div className="card w-96 bg-primary shadow-xl">
			<figure className="px-10 pt-10">
				<div className="avatar">
					<div className="w-24 rounded-full">
						<img
							src={session.user.image ?? ""}
							alt="user profil icon"
						/>
					</div>
				</div>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{session.user.name}</h2>
				<p>{session.user.email}</p>
				<p>{session.user.id}</p>
				<div className="card-actions mt-3">
					<Logout />
				</div>
			</div>
		</div>
	);
}
