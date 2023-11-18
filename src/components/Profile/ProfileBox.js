import React from "react";
import "./ProfileBox.css";

const ProfileBox = ({ title='', isSelected=false, img=1, onClick=()=>{} }) => {
  return (
    <div
      className={`profileBox ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {img===1 && <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.914 10.5338C8.68725 11.6745 9.918 12.5738 11.9183 13.2698C13.0076 13.6489 14.1536 13.9695 15.2711 14.3059C16.4921 14.673 17.6509 15.1335 18.4984 16.1122C19.3046 17.0434 19.8184 18.4361 19.8705 20.625H4.13213C4.25438 17.4225 5.943 15.3112 8.1765 14.2575L11.625 15.9818V19.5C11.625 19.707 11.793 19.875 12 19.875C12.207 19.875 12.375 19.707 12.375 19.5V15.75C12.375 15.6079 12.2947 15.4781 12.1676 15.4147L8.5305 13.596C8.4285 13.4599 8.24288 13.4066 8.0805 13.4775C5.41163 14.6437 3.375 17.1292 3.375 21C3.375 21.207 3.543 21.375 3.75 21.375H20.25C20.457 21.375 20.625 21.207 20.625 21C20.625 18.3457 20.0044 16.7055 19.0654 15.621C18.1222 14.5324 16.8457 13.9965 15.4875 13.5878C14.3944 13.2585 13.2878 12.9004 12.2066 12.5771C11.3681 12.3266 10.7561 12.0604 10.1021 11.5898C9.33825 11.04 7.87537 10.1411 7.878 8.02912C8.76225 7.17037 9.62738 6.62925 10.2859 6.4335C10.7933 7.41563 11.6955 7.89337 12.7635 8.02012C13.8022 8.14312 15.0045 7.923 16.1108 7.52925C16.1201 7.64362 16.125 7.75875 16.125 7.875C16.125 9.399 15.2966 10.731 14.0662 11.4454C13.8874 11.5493 13.8262 11.7787 13.9301 11.9576C14.0344 12.1369 14.2639 12.1976 14.4427 12.0938C15.8966 11.2496 16.875 9.67575 16.875 7.875C16.875 5.18437 14.6906 3 12 3C9.30937 3 7.03275 5.18587 7.125 7.875C7.15838 8.84288 7.40812 9.78713 7.914 10.5338ZM15.9776 6.77963C15.4972 5.03363 13.8975 3.75 12 3.75C10.0489 3.75 8.41237 5.1075 7.98413 6.92887C8.91975 6.16087 9.80512 5.73075 10.4411 5.6295C10.6144 5.60212 10.7835 5.69812 10.8484 5.86125C11.2073 6.762 11.9606 7.16962 12.852 7.27537C13.8229 7.3905 14.9509 7.15988 15.9776 6.77963Z"
          fill="#3DC182"
        />
      </svg>}

      {img===2 && <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 47 40" fill="none">
        <path d="M45.18 37.4242H42.0714V15.6643C42.0714 14.8399 41.7439 14.0492 41.1609 13.4662C40.578 12.8832 39.7873 12.5557 38.9629 12.5557H26.5287V3.23008C26.529 2.66717 26.3765 2.11472 26.0874 1.6317C25.7984 1.14868 25.3836 0.753227 24.8873 0.48754C24.391 0.221854 23.8319 0.0959089 23.2697 0.123149C22.7074 0.15039 22.1631 0.329793 21.6949 0.64221L6.15209 11.0015C5.72571 11.2859 5.3763 11.6714 5.13495 12.1236C4.8936 12.5758 4.76781 13.0807 4.76879 13.5932V37.4242H1.66023C1.24801 37.4242 0.852677 37.5879 0.561194 37.8794C0.269711 38.1709 0.105957 38.5662 0.105957 38.9784C0.105957 39.3907 0.269711 39.786 0.561194 40.0775C0.852677 40.369 1.24801 40.5327 1.66023 40.5327H45.18C45.5922 40.5327 45.9875 40.369 46.279 40.0775C46.5705 39.786 46.7342 39.3907 46.7342 38.9784C46.7342 38.5662 46.5705 38.1709 46.279 37.8794C45.9875 37.5879 45.5922 37.4242 45.18 37.4242ZM38.9629 15.6643V37.4242H26.5287V15.6643H38.9629ZM7.87734 13.5932L23.4201 3.23008V37.4242H7.87734V13.5932ZM20.3115 18.7728V21.8814C20.3115 22.2936 20.1478 22.689 19.8563 22.9804C19.5648 23.2719 19.1695 23.4357 18.7573 23.4357C18.3451 23.4357 17.9497 23.2719 17.6582 22.9804C17.3667 22.689 17.203 22.2936 17.203 21.8814V18.7728C17.203 18.3606 17.3667 17.9653 17.6582 17.6738C17.9497 17.3823 18.3451 17.2186 18.7573 17.2186C19.1695 17.2186 19.5648 17.3823 19.8563 17.6738C20.1478 17.9653 20.3115 18.3606 20.3115 18.7728ZM14.0944 18.7728V21.8814C14.0944 22.2936 13.9307 22.689 13.6392 22.9804C13.3477 23.2719 12.9524 23.4357 12.5402 23.4357C12.1279 23.4357 11.7326 23.2719 11.4411 22.9804C11.1496 22.689 10.9859 22.2936 10.9859 21.8814V18.7728C10.9859 18.3606 11.1496 17.9653 11.4411 17.6738C11.7326 17.3823 12.1279 17.2186 12.5402 17.2186C12.9524 17.2186 13.3477 17.3823 13.6392 17.6738C13.9307 17.9653 14.0944 18.3606 14.0944 18.7728ZM14.0944 29.6528V32.7613C14.0944 33.1736 13.9307 33.5689 13.6392 33.8604C13.3477 34.1519 12.9524 34.3156 12.5402 34.3156C12.1279 34.3156 11.7326 34.1519 11.4411 33.8604C11.1496 33.5689 10.9859 33.1736 10.9859 32.7613V29.6528C10.9859 29.2406 11.1496 28.8452 11.4411 28.5537C11.7326 28.2623 12.1279 28.0985 12.5402 28.0985C12.9524 28.0985 13.3477 28.2623 13.6392 28.5537C13.9307 28.8452 14.0944 29.2406 14.0944 29.6528ZM20.3115 29.6528V32.7613C20.3115 33.1736 20.1478 33.5689 19.8563 33.8604C19.5648 34.1519 19.1695 34.3156 18.7573 34.3156C18.3451 34.3156 17.9497 34.1519 17.6582 33.8604C17.3667 33.5689 17.203 33.1736 17.203 32.7613V29.6528C17.203 29.2406 17.3667 28.8452 17.6582 28.5537C17.9497 28.2623 18.3451 28.0985 18.7573 28.0985C19.1695 28.0985 19.5648 28.2623 19.8563 28.5537C20.1478 28.8452 20.3115 29.2406 20.3115 29.6528Z" fill="#3DC182"/>
      </svg>}

      <p>{title}</p>
    </div>
  );
};

export default ProfileBox;
