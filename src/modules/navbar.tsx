'use client';

import Link from 'next/link';
import { appConfig } from '../config';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Image
                        height={48}
                        width={48}
                        src="/twitter-icon.png"
                        alt=""
                    />
                </a>

                <ul className="navbar-nav gap-16">
                    {appConfig.navbarItems.map(({ label, href }) =>
                        <li className="nav-item" key={href}>
                            <Link className="nav-link active" aria-current="page" href={href}>
                                {label}
                            </Link>
                        </li>
                    )}
                </ul>

                <ul className="navbar-nav gap-16">
                    <li className="nav-item nav-link active" aria-current="page" >
                        Sign Up
                    </li>
                    <li className="nav-item nav-link active" aria-current="page" >
                        Sign In
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
