"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
/*Se puede hacer routing directamente a un id se que va a tocar pra cuadno se abra directamente 

creo que tambien se puede hacer routerpush a un id especifico

redirect internally throws an error so it should be called outside of try/catch blocks.
*/
export function Links() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="start-0">dsadsad</div>
      <ul className="grid end-0">
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""} `} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/users" ? "active" : ""}`}
            href="/users"
          >
            Usuarios
          </Link>
        </li>
      </ul>
    </nav>
  );
}
