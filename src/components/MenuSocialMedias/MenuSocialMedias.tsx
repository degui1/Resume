import { Box, IconButton } from "@mui/material";

import instagram from "../../../public/images/instagram.svg";
import linkedIn from "../../../public/images/linkedIn.svg";
import { useRef } from "react";
import { Delete } from "@mui/icons-material";

type SocialMediaObject = {
  id: string;
  icon: string;
  redirectPath: string;
}

export function MenuSocialMedias(): React.ReactNode {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const socialMedias: SocialMediaObject[] = [
    {
      id: crypto.randomUUID(),
      icon: instagram,
      redirectPath: "https://www.instagram.com/"
    },
    {
      id: crypto.randomUUID(),
      icon: linkedIn,
      redirectPath: "https://www.linkedin.com/feed/",
    },
  ];

  function redirectTo() {
    linkRef.current?.click();
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
      {socialMedias.map(({id, icon, redirectPath}) => {
        return (
          <IconButton key={id} sx={{ maxWidth: "40px"}} onClick={redirectTo}>
            <img src={icon} alt="" style={{ maxWidth: "100%" }} />
            <a href={redirectPath} target="_blank" ref={linkRef} style={{display: "none"}}></a>
          </IconButton>
        )
      })}
    </Box>
  )
}