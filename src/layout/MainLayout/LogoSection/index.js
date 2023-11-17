"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ButtonBase } from "@mui/material";
import config from "@/config";
import Logo from "@/ui-component/Logo";
import { MENU_OPEN } from "@/store/actions";

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <Link href={config.defaultPath}>
      <ButtonBase
        disableRipple
        onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      >
        {/* <Logo /> */}
      </ButtonBase>
    </Link>
  );
};

export default LogoSection;
