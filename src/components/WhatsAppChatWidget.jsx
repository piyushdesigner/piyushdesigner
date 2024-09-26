"use client";
import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import "./custom-styles.css"; // Import the custom CSS file

const ReactApp = () => {
  return (
    <WhatsAppWidget
      phoneNo="919557806746"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      messageBox={true}
      iconSize="40"
      iconColor="white"
      iconBgColor="Steel Blue"
      headerIcon="https://img.freepik.com/free-vector/gradient-p-logo-template_23-2149372725.jpg?t=st=1727364634~exp=1727368234~hmac=71ae593ba69a328bd6f3f1a7085869865322590549037df2310c137b3213fe4f&w=740"
      headerIconColor="pink"
      headerTxtColor="black"
      headerBgColor="tomato"
    />
  );
};

export default ReactApp;