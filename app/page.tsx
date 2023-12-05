import Image from "next/image";
import LoginBtn from "./Componants/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import Logout from "./Componants/LogoutBtn";
import User from "./Componants/User";

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (session) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center p-2 text-white bg-black gap-2">
				<User />
			</main>
		);
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-2 text-white bg-black">
			<LoginBtn />
		</main>
	);
}
