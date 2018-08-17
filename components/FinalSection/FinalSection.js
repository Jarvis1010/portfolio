import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import LinkList from "../LinkList/LinkList";
import PadBox from "../PadBox/PadBox";
import Grid from "../Grid";
import { breakWidth480 } from "../constants/styled-constants";

export const FinalSection = ({ links }) => (
  <PadBox>
    <Grid minWidth={breakWidth480}>
      <TitleBox title="ABOUT THIS PAGE">
        <p>Made with love and patience by Justin Travis Mair</p>
      </TitleBox>
      <TitleBox title="AROUND THE WEB">
        <LinkList links={links} />
      </TitleBox>
    </Grid>
  </PadBox>
);

export default FinalSection;
