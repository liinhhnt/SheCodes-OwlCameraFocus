import React from "react";

const FooterImage = {
  instagramIcon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6328 7C11.6439 7 10.6772 7.29324 9.85496 7.84265C9.03272 8.39206 8.39185 9.17295 8.01341 10.0866C7.63498 11.0002 7.53596 12.0055 7.72889 12.9755C7.92181 13.9454 8.39802 14.8363 9.09728 15.5355C9.79654 16.2348 10.6875 16.711 11.6574 16.9039C12.6273 17.0969 13.6326 16.9978 14.5462 16.6194C15.4599 16.241 16.2408 15.6001 16.7902 14.7779C17.3396 13.9556 17.6328 12.9889 17.6328 12C17.6328 10.6739 17.106 9.40215 16.1683 8.46447C15.2307 7.52678 13.9589 7 12.6328 7ZM12.6328 15C12.0395 15 11.4594 14.8241 10.9661 14.4944C10.4728 14.1648 10.0882 13.6962 9.86117 13.1481C9.63411 12.5999 9.5747 11.9967 9.69046 11.4147C9.80621 10.8328 10.0919 10.2982 10.5115 9.87868C10.931 9.45912 11.4656 9.1734 12.0475 9.05764C12.6295 8.94189 13.2327 9.0013 13.7809 9.22836C14.329 9.45542 14.7976 9.83994 15.1272 10.3333C15.4569 10.8266 15.6328 11.4067 15.6328 12C15.6328 12.7956 15.3167 13.5587 14.7541 14.1213C14.1915 14.6839 13.4285 15 12.6328 15ZM17.6328 6C17.435 6 17.2417 6.05865 17.0772 6.16853C16.9128 6.27841 16.7846 6.43459 16.7089 6.61732C16.6332 6.80004 16.6134 7.00111 16.652 7.19509C16.6906 7.38907 16.7859 7.56725 16.9257 7.70711C17.0656 7.84696 17.2437 7.9422 17.4377 7.98079C17.6317 8.01937 17.8328 7.99957 18.0155 7.92388C18.1982 7.84819 18.3544 7.72002 18.4643 7.55557C18.5742 7.39112 18.6328 7.19778 18.6328 7C18.6328 6.73478 18.5275 6.48043 18.3399 6.29289C18.1524 6.10536 17.898 6 17.6328 6ZM22.5728 8.24C22.5562 7.38542 22.3939 6.53995 22.0928 5.74C21.8136 5.01207 21.3844 4.35099 20.8331 3.7997C20.2818 3.2484 19.6207 2.81922 18.8928 2.54C18.0929 2.2389 17.2474 2.07657 16.3928 2.06C15.4228 2 15.1028 2 12.6328 2C10.1628 2 9.84281 2 8.87281 2.06C8.01824 2.07657 7.17276 2.2389 6.37281 2.54C5.64488 2.81922 4.9838 3.2484 4.43251 3.7997C3.88122 4.35099 3.45203 5.01207 3.17281 5.74C2.87171 6.53995 2.70938 7.38542 2.69281 8.24C2.63281 9.22 2.63281 9.54 2.63281 12C2.63281 14.46 2.63281 14.78 2.69281 15.76C2.70938 16.6146 2.87171 17.4601 3.17281 18.26C3.45203 18.9879 3.88122 19.649 4.43251 20.2003C4.9838 20.7516 5.64488 21.1808 6.37281 21.46C7.17276 21.7611 8.01824 21.9234 8.87281 21.94C9.87281 21.94 10.1628 22 12.6328 22C15.1028 22 15.4228 22 16.3928 21.94C17.2474 21.9234 18.0929 21.7611 18.8928 21.46C19.6207 21.1808 20.2818 20.7516 20.8331 20.2003C21.3844 19.649 21.8136 18.9879 22.0928 18.26C22.3939 17.4601 22.5562 16.6146 22.5728 15.76C22.5728 14.76 22.6328 14.46 22.6328 12C22.6328 9.54 22.6328 9.22 22.5728 8.24ZM20.5728 15.67C20.5553 16.3046 20.4371 16.9324 20.2228 17.53C20.0456 18.0023 19.7655 18.4293 19.4028 18.78C19.0542 19.1428 18.6264 19.4201 18.1528 19.59C17.5538 19.8131 16.9218 19.9348 16.2828 19.95C15.3428 19.95 15.0528 20 12.6228 20C10.1928 20 9.91281 20 8.97281 20C8.33483 19.9835 7.70356 19.8654 7.10281 19.65C6.63047 19.4728 6.20348 19.1927 5.85281 18.83C5.48997 18.4814 5.21273 18.0536 5.04281 17.58C4.82062 16.9842 4.69896 16.3557 4.68281 15.72C4.68281 14.72 4.68281 14.47 4.68281 12.05C4.68281 9.63 4.68281 9.34 4.68281 8.38C4.70005 7.74121 4.82165 7.10954 5.04281 6.51C5.21537 6.04063 5.49235 5.61662 5.85281 5.27C6.20139 4.90715 6.62922 4.62992 7.10281 4.46C7.7018 4.2369 8.3338 4.11523 8.97281 4.1C9.91281 4 10.2028 4 12.6328 4C15.0628 4 15.3528 4 16.2928 4C16.935 4.01633 17.5701 4.13794 18.1728 4.36C18.6422 4.53256 19.0662 4.80953 19.4128 5.17C19.7757 5.51858 20.0529 5.94641 20.2228 6.42C20.4676 7.02856 20.6063 7.67458 20.6328 8.33C20.6328 9.33 20.6828 9.58 20.6828 12C20.6828 14.42 20.6328 14.71 20.6328 15.67H20.5728Z"
        fill="#7F848D"
      />
    </svg>
  ),
  facebookIcon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4628 9.44C19.3711 9.30429 19.2474 9.19319 19.1027 9.11647C18.958 9.03975 18.7966 8.99975 18.6328 9H15.6328V7H17.8328C18.098 7 18.3524 6.89464 18.5399 6.70711C18.7275 6.51957 18.8328 6.26522 18.8328 6V2C18.8328 1.73478 18.7275 1.48043 18.5399 1.29289C18.3524 1.10536 18.098 1 17.8328 1H14.6328C13.0946 1 11.6193 1.61107 10.5316 2.69878C9.44388 3.78649 8.83281 5.26174 8.83281 6.8V9H6.63281C6.3676 9 6.11324 9.10536 5.92571 9.29289C5.73817 9.48043 5.63281 9.73478 5.63281 10V14C5.63281 14.2652 5.73817 14.5196 5.92571 14.7071C6.11324 14.8946 6.3676 15 6.63281 15H8.83281V22C8.83281 22.2652 8.93817 22.5196 9.12571 22.7071C9.31324 22.8946 9.5676 23 9.83281 23H14.6328C14.898 23 15.1524 22.8946 15.3399 22.7071C15.5275 22.5196 15.6328 22.2652 15.6328 22V15H17.0328C17.2331 15.0002 17.4288 14.9402 17.5946 14.8279C17.7604 14.7156 17.8887 14.5561 17.9628 14.37L19.5628 10.37C19.6232 10.2186 19.6457 10.0547 19.6283 9.89259C19.6108 9.7305 19.554 9.57512 19.4628 9.44ZM16.3528 13H14.6328C14.3676 13 14.1132 13.1054 13.9257 13.2929C13.7382 13.4804 13.6328 13.7348 13.6328 14V21H10.8328V14C10.8328 13.7348 10.7275 13.4804 10.5399 13.2929C10.3524 13.1054 10.098 13 9.83281 13H7.63281V11H9.83281C10.098 11 10.3524 10.8946 10.5399 10.7071C10.7275 10.5196 10.8328 10.2652 10.8328 10V6.8C10.8355 5.79299 11.2367 4.82798 11.9487 4.11591C12.6608 3.40384 13.6258 3.00264 14.6328 3H16.8328V5H16.0328C15.6942 4.95067 15.3491 4.97137 15.0189 5.06082C14.6886 5.15026 14.3802 5.30655 14.1128 5.52C13.9505 5.6899 13.8243 5.8909 13.7418 6.11089C13.6593 6.33087 13.6223 6.56529 13.6328 6.8V10C13.6328 10.2652 13.7382 10.5196 13.9257 10.7071C14.1132 10.8946 14.3676 11 14.6328 11H17.1528L16.3528 13Z"
        fill="#7F848D"
      />
    </svg>
  ),
  youtubeIcon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0328 11.16L11.1328 8.00005C10.9808 7.91228 10.8083 7.86608 10.6328 7.86608C10.4573 7.86608 10.2848 7.91228 10.1328 8.00005C9.98455 8.08557 9.86072 8.20771 9.77318 8.35479C9.68563 8.50187 9.6373 8.66895 9.63281 8.84005V15.16C9.63411 15.3382 9.683 15.5129 9.77442 15.6658C9.86585 15.8188 9.99648 15.9445 10.1528 16.0301C10.2982 16.1157 10.464 16.1606 10.6328 16.16C10.8099 16.1479 10.9815 16.093 11.1328 16L16.0328 12.84C16.1732 12.7494 16.2886 12.625 16.3685 12.4783C16.4484 12.3315 16.4902 12.1671 16.4902 12C16.4902 11.833 16.4484 11.6686 16.3685 11.5218C16.2886 11.3751 16.1732 11.2507 16.0328 11.16ZM11.6328 13.32V10.68L13.6328 12L11.6328 13.32ZM20.0128 4.51005L18.4628 4.31005C14.6238 3.84001 10.7418 3.84001 6.90281 4.31005L5.35281 4.51005C4.60752 4.59116 3.91821 4.94392 3.41649 5.50098C2.91477 6.05803 2.63579 6.78036 2.63281 7.53005V16.47C2.63917 17.2086 2.91332 17.9198 3.40436 18.4715C3.8954 19.0233 4.56997 19.3781 5.30281 19.47L6.85281 19.66C8.77057 19.8931 10.701 20.0066 12.6328 20C14.5651 20 16.4955 19.8798 18.4128 19.64L19.9628 19.4501C20.6957 19.3581 21.3702 19.0033 21.8613 18.4515C22.3523 17.8998 22.6265 17.1886 22.6328 16.4501V7.53005C22.6313 6.78803 22.3593 6.072 21.8678 5.51609C21.3763 4.96017 20.6991 4.6025 19.9628 4.51005H20.0128ZM20.6828 16.51C20.6836 16.762 20.5893 17.0049 20.4187 17.1903C20.2482 17.3757 20.0139 17.4899 19.7628 17.51L18.2128 17.7001C14.5405 18.1601 10.8251 18.1601 7.15281 17.7001L5.60281 17.51C5.3517 17.4899 5.11744 17.3757 4.94688 17.1903C4.77631 17.0049 4.68201 16.762 4.68281 16.51V7.53005C4.69473 7.282 4.79337 7.04601 4.9615 6.86325C5.12964 6.68049 5.35661 6.56256 5.60281 6.53005L7.10281 6.30005C10.7755 5.8467 14.4901 5.8467 18.1628 6.30005L19.7128 6.49005C19.959 6.52256 20.186 6.64049 20.3541 6.82325C20.5223 7.00601 20.6209 7.242 20.6328 7.49005L20.6828 16.51Z"
        fill="#7F848D"
      />
    </svg>
  ),
};
export default FooterImage;