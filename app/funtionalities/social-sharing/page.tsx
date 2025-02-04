"use client"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton  , } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon  } from "react-share";

const SocialShare = () => {
  const shareUrl = "http://localhost:3000";
  const title = "Check out this amazing website!";

  return (
    <div className="flex gap-2">
      {/* Facebook Button */}
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon className="" size={20} round />
      </FacebookShareButton>

      {/* Twitter Button */}
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={20} round />
      </TwitterShareButton>

      {/* WhatsApp Button */}
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={20} round />
      </WhatsappShareButton>

    </div>
  );
};

export default SocialShare;