import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { UserNav } from "./UserNav";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import "./MobileUserNav.css";

export const MobileUserNav = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="mobile_menu_btn"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}>
          {open ? " " : <HamburgerMenuIcon className="menu_icon" />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="dialog_title"></Dialog.Title>
          <Dialog.Description className="dialog_description"></Dialog.Description>

          <Dialog.Close asChild>
            <button className="close_btn">
              <Cross2Icon />
            </button>
          </Dialog.Close>
          <UserNav {...props} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
