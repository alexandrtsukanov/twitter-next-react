'use client';

import Link from 'next/link';
import { appConfig } from '../config';
import Image from 'next/image';
import AuthNavbarItems from '../components/authNavbarItems';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary h-16">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image
                        height={48}
                        width={48}
                        src="/twitter-icon.png"
                        alt=""
                    />
                </Link>

                <ul className="navbar-nav gap-8">
                    {appConfig.navbarItems.map(({ label, href }) =>
                        <li className="nav-item" key={href}>
                            <Link className="nav-link active" aria-current="page" href={href}>
                                {label}
                            </Link>
                        </li>
                    )}
                </ul>

                <AuthNavbarItems />
            </div>
        </nav>
    )
}

export default Navbar;
