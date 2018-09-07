import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import LinkList from "../LinkList/LinkList";
import PadBox from "../PadBox/PadBox";
import Grid from "../Grid";

export const FinalSection = ({ links }) => (
  <PadBox size="16">
    <Grid minWidth={"320px"}>
      <TitleBox title="ABOUT THIS PAGE">
        <p>Made with love and patience by Justin Travis Waith-Mair</p>
      </TitleBox>
      <TitleBox title="AROUND THE WEB">
        <LinkList links={links} />
      </TitleBox>
    </Grid>
  </PadBox>
);

export default FinalSection;
