import React from "react";
import "./ProfileBox.css";

const ProfileBox = ({ title, isSelected, onClick }) => {
  return (
    <button
      className={`profileBox ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.914 10.5338C8.68725 11.6745 9.918 12.5738 11.9183 13.2698C13.0076 13.6489 14.1536 13.9695 15.2711 14.3059C16.4921 14.673 17.6509 15.1335 18.4984 16.1122C19.3046 17.0434 19.8184 18.4361 19.8705 20.625H4.13213C4.25438 17.4225 5.943 15.3112 8.1765 14.2575L11.625 15.9818V19.5C11.625 19.707 11.793 19.875 12 19.875C12.207 19.875 12.375 19.707 12.375 19.5V15.75C12.375 15.6079 12.2947 15.4781 12.1676 15.4147L8.5305 13.596C8.4285 13.4599 8.24288 13.4066 8.0805 13.4775C5.41163 14.6437 3.375 17.1292 3.375 21C3.375 21.207 3.543 21.375 3.75 21.375H20.25C20.457 21.375 20.625 21.207 20.625 21C20.625 18.3457 20.0044 16.7055 19.0654 15.621C18.1222 14.5324 16.8457 13.9965 15.4875 13.5878C14.3944 13.2585 13.2878 12.9004 12.2066 12.5771C11.3681 12.3266 10.7561 12.0604 10.1021 11.5898C9.33825 11.04 7.87537 10.1411 7.878 8.02912C8.76225 7.17037 9.62738 6.62925 10.2859 6.4335C10.7933 7.41563 11.6955 7.89337 12.7635 8.02012C13.8022 8.14312 15.0045 7.923 16.1108 7.52925C16.1201 7.64362 16.125 7.75875 16.125 7.875C16.125 9.399 15.2966 10.731 14.0662 11.4454C13.8874 11.5493 13.8262 11.7787 13.9301 11.9576C14.0344 12.1369 14.2639 12.1976 14.4427 12.0938C15.8966 11.2496 16.875 9.67575 16.875 7.875C16.875 5.18437 14.6906 3 12 3C9.30937 3 7.03275 5.18587 7.125 7.875C7.15838 8.84288 7.40812 9.78713 7.914 10.5338ZM15.9776 6.77963C15.4972 5.03363 13.8975 3.75 12 3.75C10.0489 3.75 8.41237 5.1075 7.98413 6.92887C8.91975 6.16087 9.80512 5.73075 10.4411 5.6295C10.6144 5.60212 10.7835 5.69812 10.8484 5.86125C11.2073 6.762 11.9606 7.16962 12.852 7.27537C13.8229 7.3905 14.9509 7.15988 15.9776 6.77963Z"
          fill="#3DC182"
        />
      </svg>
      <p>{title}</p>
    </button>
  );
};

export default ProfileBox;
