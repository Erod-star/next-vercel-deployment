import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface ActiveLinkProps {
  text: string;
  href: string;
}

const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  const router = useRouter();

  const { asPath } = router;

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
