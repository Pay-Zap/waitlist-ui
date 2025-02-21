import { ITypographyProps } from "./types";

const Typography: React.FunctionComponent<ITypographyProps> = ({
  type = "p",
  children,
  classes,
}) => {
  const Component = type;

  // styles are defined in global base for Component

  return <Component className={classes}>{children}</Component>;
};

export default Typography;
