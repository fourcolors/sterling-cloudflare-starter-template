/* eslint-disable react/display-name */
import React, { type PropsWithChildren } from "react";
import { type NavLinkProps, NavLink as RemixNavLink } from "@remix-run/react";
import styles from "./nav.module.css";
import { Flex } from "@radix-ui/themes";
import { useCurrentUserContext } from "~/context/CurrentUserContext";

const NavLink = ({ to, children }: NavLinkProps) => (
	<RemixNavLink
		to={to}
		className={({ isActive }) =>
			`${styles.link} ${isActive ? styles.active : ""}`
		}
		prefetch="intent"
	>
		{children as string}
	</RemixNavLink>
);

const ListItem = ({ children }: PropsWithChildren<{}>) => (
	<li className={styles.item}>{children}</li>
);

const Nav = () => {
	const { currentUser } = useCurrentUserContext();
	const isLoggedIn = currentUser !== null;

	return (
		<nav className={styles.root}>
			<Flex justify="start" align="center">
				<Flex justify="center" align="center">
					<RemixNavLink
						to={isLoggedIn ? "/dashboard" : "/"}
						className={styles.link}
						prefetch="intent"
					>
						My Sweet New App
					</RemixNavLink>
				</Flex>
				{isLoggedIn && (
					<div style={{ marginLeft: "auto" }}>
						<ul className={styles.list}>
							<ListItem>
								<NavLink to={`/user/${currentUser.publicId}/profile`}>
									Profile
								</NavLink>
							</ListItem>
							<ListItem>
								<NavLink to={"/logout"}>Logout</NavLink>
							</ListItem>
						</ul>
					</div>
				)}
				{!isLoggedIn && (
					<div style={{ marginLeft: "auto" }}>
						<ul className={styles.list}>
							<ListItem>
								<NavLink to={"/login"}>Log In</NavLink>
							</ListItem>
						</ul>
					</div>
				)}
			</Flex>
		</nav>
	);
};

export default Nav;
