import React, { FC } from "react";
import { ScrollView } from "react-native";
import { Theme } from "./Theme";
import { Confidentiality } from "./Confidentiality";
import { Account } from "./Account";
import { LogOut } from "./LogOut";

type PropType = {
  signOut: () => Promise<void>;
};

export const AllSettings: FC<PropType> = ({ signOut }) => {
  return (
    <ScrollView>
      <Theme />
      <Confidentiality />
      <Account />
      <LogOut signOut={signOut} />
    </ScrollView>
  );
};
