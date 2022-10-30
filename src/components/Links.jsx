import { useState } from "react";
import linksData  from "../../linksData";
import Link from "./Link";

export default function Links() {
    const [links, setLinks] = useState(linksData)

  return (
    <section className="links-section">
        {links.map(link => <Link key={link.id} link={link} />)}
    </section>
  )
}
