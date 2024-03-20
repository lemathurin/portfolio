import Image from "next/image";

export default function HireWindow({ onClose }) {
  const handleWindowClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      className="w-screen h-screen flex justify-center items-end"
      onClick={onClose}
    >
      <div
        className="w-full h-[97svh] md:w-[700px] flex flex-col p-5 md:h-[500px] rounded-tl-lg rounded-tr-lg bg-white shadow-xl overflow-hidden relative gap-3 border-[1.5px] border-[#B2B2B2]"
        onClick={handleWindowClick}
      >
        <div className="flex gap-1.5 items-center">
          <div className="w-[2.75rem] h-[2.75rem]">
            <Image
              className="rounded-full"
              src="/images/profile_picture.png"
              width={44}
              height={44}
              alt="My profile picture"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="font-inter font-bold text-lg text-black">
              Mathurin Sekine
            </h5>
            <div className="flex gap-2">
              <p className="text-black">To: </p>
              <p className="text-[#737373]">Future Employer</p>
            </div>
          </div>
        </div>
        <div className=" h-full">
          <div className="bg-[#E6E6E6] w-full h-[1.5px]"></div>
          <div className="h-full w-full pt-2">
            <p>
              Hello future employer,
              <br />
              <br />I am looking for a 12-month-long internship somewhere in
              France beginning in June 2024. <br />
              <br />
              Please send me an email if you can hire me. <br />
              <br />I really need this as I don’t want to starve. <br />
              <br />
              Please hire me.
              <br />
              <br />
              Please hire me.
              <br />
              <br />
              Please hire me.
              <br />
              <br />
              Please hire me.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] absolute bottom-0 left-0 w-full py-3 flex place-content-evenly items-center border-t-[1px] border-[#B2B2B2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              d="M6.94217 20.1745C7.33473 20.1745 7.59299 19.9266 7.58267 19.5651L7.26241 8.51438C7.25209 8.15292 6.99382 7.91537 6.62192 7.91537C6.22935 7.91537 5.97109 8.16324 5.98142 8.52471L6.29134 19.5651C6.30167 19.9369 6.55993 20.1745 6.94217 20.1745ZM10 20.1745C10.3926 20.1745 10.6715 19.9266 10.6715 19.5651V8.52471C10.6715 8.16324 10.3926 7.91537 10 7.91537C9.60746 7.91537 9.33886 8.16324 9.33886 8.52471V19.5651C9.33886 19.9266 9.60746 20.1745 10 20.1745ZM13.0682 20.1745C13.4401 20.1745 13.6984 19.9369 13.7087 19.5651L14.0187 8.52471C14.0289 8.16324 13.7707 7.91537 13.3782 7.91537C13.0062 7.91537 12.748 8.15292 12.7376 8.52471L12.4277 19.5651C12.4174 19.9266 12.6756 20.1745 13.0682 20.1745ZM5.4649 5.21981H7.10746V3.00966C7.10746 2.42098 7.52069 2.03885 8.14052 2.03885H11.8389C12.4587 2.03885 12.872 2.42098 12.872 3.00966V5.21981H14.5145V2.90638C14.5145 1.40885 13.5434 0.5 11.9525 0.5H8.02688C6.43596 0.5 5.4649 1.40885 5.4649 2.90638V5.21981ZM0.774796 6.04604H19.2356C19.6592 6.04604 20 5.68456 20 5.26112C20 4.83768 19.6592 4.48654 19.2356 4.48654H0.774796C0.361571 4.48654 0 4.83768 0 5.26112C0 5.69489 0.361571 6.04604 0.774796 6.04604ZM5.26861 23.5H14.7417C16.219 23.5 17.2108 22.5395 17.2831 21.0627L18.0063 5.84981H16.343L15.6508 20.8871C15.6302 21.5068 15.186 21.9405 14.5765 21.9405H5.41324C4.8244 21.9405 4.38017 21.4964 4.34919 20.8871L3.61571 5.84981H1.99381L2.72727 21.073C2.79959 22.5499 3.77067 23.5 5.26861 23.5Z"
              fill="#007AFF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
          >
            <path
              d="M19.6221 3.76593H4.05979C3.86503 3.76593 3.6868 3.78671 3.52671 3.8285L12.1289 11.5835C12.4408 11.8652 12.7628 11.996 13.0947 11.996C13.4268 11.996 13.7487 11.8652 14.0606 11.5835L20.1408 6.10214C20.3638 6.55249 20.6584 6.96091 21.0084 7.31488L17.5041 10.4691L23.6908 16.6559C23.6966 16.5908 23.6993 16.5231 23.6993 16.4532V8.70843C23.9504 8.75513 24.2098 8.77641 24.4739 8.77641C24.7344 8.77641 24.9904 8.75543 25.2386 8.70925V16.4532C25.2386 18.5257 24.1822 19.5721 22.3813 19.5721H4.12016C2.02743 19.5721 0.960938 18.5257 0.960938 16.4532V5.34554C0.960938 3.27293 2.01736 2.22656 3.81832 2.22656H19.9261C19.7398 2.70694 19.6336 3.22529 19.6221 3.76593ZM14.9359 12.7808C14.3625 13.3039 13.7387 13.5454 13.0947 13.5454C12.4508 13.5454 11.8271 13.3039 11.2535 12.7808L9.79231 11.4655L3.35412 17.9128C3.55563 17.9928 3.79208 18.0328 4.05979 18.0328H22.1298C22.3999 18.0328 22.639 17.992 22.8428 17.9108L16.3974 11.4653L14.9359 12.7808ZM2.5003 5.33548V16.4431C2.5003 16.5164 2.50313 16.5874 2.50948 16.6552L8.69075 10.474L2.53451 4.93271C2.51143 5.0566 2.5003 5.19127 2.5003 5.33548Z"
              fill="#2B7FE2"
            />
            <path
              d="M24.4755 7.40827C26.3771 7.40827 27.9668 5.82866 27.9668 3.91703C27.9668 2.0054 26.3771 0.425781 24.4755 0.425781C22.564 0.425781 20.9844 2.0054 20.9844 3.91703C20.9844 5.82866 22.564 7.40827 24.4755 7.40827Z"
              fill="#2B7FE2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M10.4707 17.9551C11.1348 17.9551 11.6133 17.4668 11.6133 16.8125V13.082H11.8965C15.6856 13.082 18.0684 14.039 19.7774 17.2324C20.1192 17.8574 20.5684 17.9551 20.9785 17.9551C21.4961 17.9551 21.9844 17.4863 21.9844 16.6465C21.9844 9.42969 18.9277 4.92773 11.8965 4.92773H11.6133V1.23633C11.6133 0.582031 11.1348 0.0449219 10.4512 0.0449219C9.97266 0.0449219 9.65039 0.25 9.13281 0.738281L1.42773 7.94531C1.04688 8.30664 0.929688 8.66797 0.929688 9C0.929688 9.32226 1.05664 9.69336 1.42773 10.0449L9.13281 17.3203C9.60157 17.7597 9.99219 17.9551 10.4707 17.9551ZM9.91407 15.8554C9.85547 15.8554 9.79688 15.8261 9.74805 15.7676L2.78516 9.18554C2.70703 9.10742 2.67774 9.05859 2.67774 9C2.67774 8.9414 2.70703 8.88281 2.78516 8.81445L9.73828 2.14453C9.78711 2.10547 9.84571 2.0664 9.9043 2.0664C9.99219 2.0664 10.041 2.125 10.041 2.20312V6.08008C10.041 6.30469 10.1484 6.40234 10.373 6.40234H11.6817C18.3809 6.40234 20.4024 11.0508 20.5977 15.6601C20.5977 15.7383 20.5684 15.7676 20.5195 15.7676C20.4805 15.7676 20.4609 15.7383 20.4317 15.6699C19.2793 13.2187 16.3203 11.6074 11.6817 11.6074H10.373C10.1484 11.6074 10.041 11.7051 10.041 11.9297V15.709C10.041 15.7969 9.99219 15.8554 9.91407 15.8554Z"
              fill="#2B7FE2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M12.459 17.9551C12.9375 17.9551 13.3282 17.7597 13.7969 17.3203L21.502 10.0449C21.8731 9.69336 22 9.32226 22 9C22 8.66797 21.8828 8.30664 21.502 7.94531L13.7969 0.738281C13.2793 0.25 12.9571 0.0449219 12.4785 0.0449219C11.795 0.0449219 11.3067 0.582031 11.3067 1.23633V4.92773H11.0235C4.00195 4.92773 0.945312 9.42969 0.945312 16.6465C0.945312 17.4863 1.42383 17.9551 1.95117 17.9551C2.36133 17.9551 2.81055 17.8574 3.15235 17.2324C4.85156 14.039 7.24414 13.082 11.0235 13.082H11.3067V16.8125C11.3067 17.4668 11.795 17.9551 12.459 17.9551ZM13.0157 15.8554C12.9375 15.8554 12.8789 15.7969 12.8789 15.709V11.9297C12.8789 11.7051 12.7813 11.6074 12.5567 11.6074H11.2481C6.60938 11.6074 3.65039 13.2187 2.49805 15.6699C2.46875 15.7383 2.44922 15.7676 2.40039 15.7676C2.36133 15.7676 2.33203 15.7383 2.33203 15.6601C2.52735 11.0508 4.53906 6.40234 11.2481 6.40234H12.5567C12.7813 6.40234 12.8789 6.30469 12.8789 6.08008V2.20312C12.8789 2.125 12.9375 2.0664 13.0254 2.0664C13.084 2.0664 13.1426 2.10547 13.1914 2.14453L20.1446 8.81445C20.2129 8.88281 20.2422 8.9414 20.2422 9C20.2422 9.05859 20.2227 9.10742 20.1446 9.18554L13.1817 15.7676C13.1328 15.8261 13.0742 15.8554 13.0157 15.8554Z"
              fill="#2B7FE2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
