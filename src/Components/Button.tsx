import React, {FC} from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

interface Props {
  mode: string,
  props?: object,
  style: object,
  onPress(): void;
}

// const Button: FC<Props> = ({ mode, style, ...props }: Props) {
const Button: FC<Props> = ({ mode, style, ...props }) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && { backgroundColor: theme.colors.surface },
        style,
      ]}
      icon='camera'
      labelStyle={styles.text}
      mode='contained'
      {...props}
    >
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Button;
