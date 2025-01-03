import { Link } from "react-router-dom";
const PlayMarketBtn = () => {
  return (
    <>
      <div className="store col-md-6">
        <div className="download ">
          <div className="storePay">
            <Link
              to={"https://apps.apple.com/az/app/ormado-rewards/id1497136091"}
              target="_blank"
            >
              <div className="google-play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M15.3754 13.5328L12.9266 11.125L3.93701 19.9898L15.3754 13.5328Z"
                    fill="white"
                  />
                  <path
                    d="M15.3754 6.97851L3.93701 0.521484L12.9266 9.38633L15.3754 6.97851Z"
                    fill="white"
                  />
                  <path
                    d="M18.9597 11.4724C19.6928 10.9 19.6928 9.60975 18.911 9.03727L16.5117 7.67188L13.8347 10.2557L16.5117 12.8395L18.9597 11.4724Z"
                    fill="white"
                  />
                  <path
                    d="M1.58979 20.5066L12.043 10.2516L1.58979 0.000854443V0C1.06089 0.272567 0.706299 0.768999 0.706299 1.4141V19.0925C0.706299 19.7376 1.06089 20.2341 1.58979 20.5066Z"
                    fill="white"
                  />
                </svg>
                <div className="google-play-inner">
                  <p>Download on</p>
                  <h3>Google Play</h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="storePay">
            <Link
              to={
                "https://play.google.com/store/apps/details?id=de.ormado&pli=1"
              }
              target="_blank"
            >
              <div className="app-store ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                >
                  <path
                    d="M12.0503 0C12.097 0 12.1438 0 12.1931 0C12.3078 1.41623 11.7672 2.47444 11.1102 3.24076C10.4656 4.00179 9.5829 4.73989 8.1552 4.6279C8.05996 3.23194 8.60141 2.25222 9.2575 1.48766C9.86597 0.775137 10.9815 0.141094 12.0503 0Z"
                    fill="white"
                  />
                  <path
                    d="M16.3722 14.74C16.3722 14.7541 16.3722 14.7665 16.3722 14.7797C15.971 15.9949 15.3987 17.0363 14.7003 18.0028C14.0627 18.8802 13.2814 20.061 11.8863 20.061C10.6808 20.061 9.88013 19.2859 8.64468 19.2647C7.33779 19.2436 6.61909 19.9129 5.4242 20.0813C5.28751 20.0813 5.15083 20.0813 5.01679 20.0813C4.13936 19.9543 3.43124 19.2594 2.91536 18.6333C1.39419 16.7832 0.218696 14.3934 0 11.3352C0 11.0354 0 10.7365 0 10.4366C0.0925932 8.24791 1.15609 6.46835 2.56968 5.60591C3.31572 5.14736 4.3413 4.7567 5.48328 4.93131C5.9727 5.00714 6.4727 5.17469 6.91098 5.34048C7.32633 5.50009 7.84573 5.78316 8.3378 5.76817C8.67113 5.75847 9.0027 5.58475 9.33869 5.46217C10.3228 5.10679 11.2876 4.69938 12.5592 4.89074C14.0874 5.12178 15.1721 5.8008 15.8423 6.84843C14.5495 7.67118 13.5274 8.91105 13.702 11.0283C13.8572 12.9516 14.9754 14.0769 16.3722 14.74Z"
                    fill="white"
                  />
                </svg>
                <div className="app-store-inner">
                  <p>Download on the</p>
                  <h3>App Store</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayMarketBtn;
