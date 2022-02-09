import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
const promoBannerProps = {
  title: "Заголовок",
  domain: "vk.com",
  trackingLink: "https://vk.com",
  ctaText: "Перейти",
  advertisingLabel: "Реклама",
  iconLink:
    "https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg",
  description: "Описание рекламы",
  ageRestrictions: "14+",
  statistics: [
    { url: "", type: "playbackStarted" },
    { url: "", type: "click" },
  ],
};

<View activePanel="promo">
  <Panel id="promo">
    <FixedLayout vertical="bottom">
      <PromoBanner bannerData={promoBannerProps} />
    </FixedLayout>
  </Panel>
</View>;