import React from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 100%;
  max-width: 40%;
  height: 0;
  padding-bottom: 20%;
  position: relative;
  margin: 1.5rem auto;

  @media (max-width: 768px) {
    padding-bottom: 30%;
    max-width: 90%;
    max-height: 100%;

  }

  @media (max-width: 480px) {
    padding-bottom: 50%;
    max-width: 90%;
    max-height: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const MapEmbed = () => (
  <MapWrapper>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25916.626080586793!2d-5.744984461304406!3d35.711994590930026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b7f5d95e52dd5%3A0x1f28bd87df01eac4!2sBni%20Wassine!5e0!3m2!1sfr!2sma!4v1746124379469!5m2!1sfr!2sma"
      allowFullScreen=""
      loading="lazy"
      title="Bni Wassine Location"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </MapWrapper>
);

export default MapEmbed;