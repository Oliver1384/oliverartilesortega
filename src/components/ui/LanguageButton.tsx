import { Button, styled } from "@mui/material";
import { PRIMARY_COLORS } from "../../colors";
import { useTranslation } from "react-i18next";
import spainFlagIcon from "../../assets/icons/flags/spain-flag.svg";
import unitedKingdomFlagIcon from "../../assets/icons/flags/united-kingdom.svg";

const LanguageButton = styled(Button)({
  color: PRIMARY_COLORS.pageBackground,
  fontFamily: "GeistMonoBold",
  fontSize: "12px",
  minWidth: "60px",
  padding: "6px 12px",
  "&:hover": {
    borderColor: PRIMARY_COLORS.element,
    backgroundColor: PRIMARY_COLORS.element,
  },
  "&:focus": {
    borderColor: PRIMARY_COLORS.element,
    backgroundColor: PRIMARY_COLORS.element,
  },
});

const LanguageIcon = styled("img")({
  borderRadius: "4px",
  marginRight: "8px",
});

export const LanguageToggleButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <LanguageButton onClick={toggleLanguage}>
      <>
        <LanguageIcon
          src={i18n.language === "en" ? unitedKingdomFlagIcon : spainFlagIcon}
          alt={i18n.language === "en" ? "United Kingdom Flag" : "Spain Flag"}
        />
        {i18n.language === "en" ? "EN" : "ES"}
      </>
    </LanguageButton>
  );
};
