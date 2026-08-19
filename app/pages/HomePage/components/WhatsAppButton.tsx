import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { CONSTANTS } from "~/constants";
import { featureFlags } from "~/featureFlags";

type Props = {
  dark?: boolean;
};

const WhatsAppButton = ({ dark }: Props) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Button
        className={
          dark
            ? "h-12 mt-8 px-6 bg-white text-foreground border-border/10 hover:bg-background font-light"
            : "h-12 mt-8 px-6 font-normal"
        }
        size={"lg"}
        asChild
      >
        {featureFlags.enableWhatsApp ? (
          <Link
            to={CONSTANTS.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/whatsapp.png" alt="" className="w-5 h-5 mr-1" />
            Chat on WhatsApp
          </Link>
        ) : (
          <Link
            to={CONSTANTS.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </Link>
        )}
      </Button>
      <p
        className={`text-xs w-full mt-2 font-medium text-center ${dark ? "text-white/60" : "text-muted-foreground"
          }`}
      >
        Trusted by 200+ brands across India
      </p>
    </div>
  );
};

export default WhatsAppButton;
