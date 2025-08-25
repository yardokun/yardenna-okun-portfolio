import { ReactComponent as SwirlIconSvg } from "../../assets/graphics/swirlIcon.svg";
import "./swirl-icon.styles.css";

export default function SwirlIcon({ size = 24 }) {
  return <SwirlIconSvg className="swirl-icon" width={size} height={size} />;
}
