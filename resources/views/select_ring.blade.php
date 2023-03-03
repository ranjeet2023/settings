<link rel="stylesheet" href="{{asset('assets/css/settings2.css')}}">
@include('header')
<div class="MuiBox-root css-0">
    <a href="{{url('/get_config_ring')}}" style="text-decoration:none">
        <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium back-btn css-1ujsas3" tabindex="0" type="button">
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIosIcon">
                <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
            </svg> Back to Gallery<span class="MuiTouchRipple-root css-w0pj6f"></span>
        </button>
    </a>
    <div class="MuiBox-root css-1vr8h81">
        <div class="MuiBox-root css-k008qs">
            <div class="MuiBox-root css-9rrtc1" id="diamondimage">
                <img src="{{ url('assets/img/shape/' . ucfirst(strtolower($ring_data['sub_category'])) . '.png') }} " alt="diamond" width="220px" height="220px" style="border-radius: 10px;">
            </div>
        </div>
        <div class="MuiBox-root css-19midj6">
            <h1> {{ $ring_data['category'] }}</h1>
            <p>{{ $ring_data['Product_description'] }}</p>
            <p>SKU : {{ $ring_data['sku']}}</p>
            <div style="display: flex; align-items: center; color: rgb(49, 79, 222);">
                <h1> ${{ $ring_data['total_price'] }} {{ $ring_data['sub_category'] }}</h1>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1dia5b9" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoIcon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>{{ $ring_data['metal_name'] }}
            </div>
            <table style="margin: 20px 0px;">
                <tbody>
                    <tr>
                        <td style="text-align: center;">
                            <svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.57428 6.43899C3.20834 6.4404 3.84168 6.43757 4.47574 6.4298C4.83482 6.42485 5.05112 6.08556 4.94085 5.75899C4.84966 5.48826 4.63478 5.4098 4.36829 5.41051C3.71021 5.41192 3.05212 5.4098 2.39474 5.41051C1.76139 5.40909 1.12734 5.41192 0.493994 5.4197C0.134909 5.42464 -0.0813904 5.76394 0.0288798 6.09051C0.120065 6.36123 0.33495 6.43969 0.601436 6.43899C1.25882 6.43757 1.9169 6.43969 2.57428 6.43899Z" fill="black"></path>
                                <path d="M32.9089 11.5863C32.8806 11.1042 32.7795 10.5846 32.5576 10.1641C31.6712 8.48385 30.7275 6.83403 29.7987 5.17645C29.5393 4.71345 29.1307 4.48585 28.5992 4.48514C27.4993 4.48443 26.4001 4.48443 25.3003 4.48443C25.1865 4.48443 25.0727 4.48443 24.9235 4.48443C24.9235 3.37537 24.9235 2.31861 24.9235 1.26186C24.9235 0.30265 24.6188 0.00152662 23.6476 0.00152662C19.07 0.00152662 14.4917 0.00152662 9.91404 0.00152662C8.99442 0.00152662 8.07409 -0.00271424 7.15446 0.00294064C6.43064 0.00788866 6.0871 0.35637 6.08428 1.07525C6.08216 1.56934 6.08357 2.06344 6.08357 2.5957C5.93654 2.5957 5.82415 2.5957 5.71105 2.5957C5.11871 2.59641 4.52706 2.58722 3.93472 2.60065C3.59542 2.60843 3.36781 2.84098 3.3763 3.12797C3.38407 3.40364 3.60532 3.60934 3.92623 3.63549C3.98914 3.64044 4.05276 3.63761 4.11638 3.63761C6.02985 3.63761 7.94332 3.63832 9.85679 3.6362C9.97201 3.6362 10.0915 3.63479 10.2017 3.60651C10.5113 3.52734 10.6775 3.22976 10.5679 2.9456C10.4612 2.6678 10.2279 2.59429 9.95363 2.595C9.11812 2.59712 8.28332 2.59641 7.44781 2.595C7.33683 2.595 7.22656 2.5851 7.11841 2.58015C7.11841 2.05071 7.11841 1.55874 7.11841 1.06323C12.7132 1.06323 18.2882 1.06323 23.8526 1.06323C23.8526 5.48605 23.8526 9.88555 23.8526 14.2744C23.7918 14.2907 23.772 14.3006 23.7522 14.3006C21.3949 14.3027 19.0368 14.3013 16.6794 14.3091C16.4737 14.3098 16.4497 14.1988 16.4044 14.0454C16.0411 12.8247 14.9716 12.0273 13.7162 12.0295C12.4658 12.0316 11.4013 12.8346 11.0464 14.0645C10.9913 14.2554 10.9121 14.3105 10.7213 14.3091C9.6009 14.3006 8.47982 14.3055 7.35945 14.3041C7.27887 14.3041 7.19829 14.2893 7.11841 14.2815C7.11841 13.323 7.11841 12.3871 7.11841 11.4166C7.6217 11.4166 8.1059 11.4272 8.59009 11.4131C8.8997 11.4039 9.10257 11.1939 9.11105 10.9211C9.11953 10.6468 8.89616 10.4206 8.58585 10.3902C8.54415 10.386 8.50103 10.3881 8.45933 10.3881C6.85051 10.3881 5.2417 10.3881 3.63289 10.3895C3.32964 10.3888 3.02569 10.3888 2.72245 10.3902C2.58391 10.3902 2.44536 10.3902 2.30682 10.391C2.27572 10.391 2.24391 10.3924 2.2121 10.3945C2.03962 10.3959 1.86715 10.3973 1.69468 10.3994C1.33559 10.4044 1.11929 10.7437 1.22956 11.0702C1.32075 11.341 1.53563 11.4194 1.80212 11.4187C1.90744 11.4187 4.59775 11.4216 5.69762 11.4216C5.81991 11.4216 5.9422 11.4216 6.08357 11.4216C6.08357 12.5292 6.08286 13.5853 6.08428 14.642C6.08498 15.1658 6.24191 15.3248 6.75933 15.3248C8.07055 15.3255 9.38107 15.3305 10.6923 15.3199C10.9093 15.3185 10.9941 15.3771 11.0563 15.5949C11.3949 16.7732 12.4863 17.5946 13.6901 17.6045C14.9342 17.6151 16.0383 16.8107 16.3903 15.6019C16.4603 15.3623 16.5642 15.3206 16.7819 15.3206C19.6362 15.327 22.4912 15.3284 25.3455 15.3206C25.5752 15.3199 25.6629 15.3849 25.73 15.6125C26.0637 16.7428 27.0497 17.5175 28.2161 17.6002C29.3322 17.6794 30.49 17.0566 30.883 15.9879C31.1071 15.3778 31.4174 15.2732 31.9766 15.3128C32.5682 15.3545 32.9216 14.97 32.9237 14.3776C32.9273 13.446 32.9626 12.5137 32.9089 11.5863ZM13.7325 16.5753C12.7471 16.5724 11.9851 15.7991 11.9837 14.7996C11.9823 13.8305 12.7613 13.0438 13.7226 13.0431C14.6938 13.0424 15.4806 13.839 15.4799 14.8223C15.4799 15.7864 14.691 16.5774 13.7325 16.5753ZM28.3864 16.5746C27.4074 16.5611 26.644 15.7935 26.6419 14.8208C26.6391 13.8362 27.4286 13.0367 28.397 13.0431C29.3612 13.0495 30.1366 13.8319 30.138 14.8003C30.1394 15.7935 29.3555 16.588 28.3864 16.5746ZM31.9115 14.3041C31.6882 14.3041 31.4796 14.3218 31.2768 14.2949C31.2054 14.2858 31.1156 14.1783 31.0894 14.0977C30.6724 12.7929 29.6538 12.0217 28.3447 12.0295C27.1091 12.0372 26.0729 12.8416 25.7032 14.0991C25.6537 14.2674 25.5823 14.3225 25.4197 14.3112C25.2734 14.3013 25.1257 14.3091 24.9539 14.3091C24.9539 11.3827 24.9539 8.47183 24.9539 5.5115C25.2649 5.5115 25.559 5.5115 25.853 5.5115C26.7302 5.5115 27.6075 5.51645 28.4847 5.50867C28.7102 5.50655 28.8558 5.57865 28.9689 5.78293C29.8461 7.37125 30.748 8.94684 31.6026 10.5472C31.7885 10.8949 31.8776 11.3254 31.8988 11.7234C31.9419 12.5653 31.9115 13.4114 31.9115 14.3041Z" fill="black"></path>
                                <path d="M4.81789 8.10009C4.68782 8.10433 4.5415 8.13614 4.43406 8.204C4.22978 8.33335 4.19302 8.55318 4.26442 8.76736C4.35348 9.03314 4.57049 9.1109 4.84121 9.1109C7.76761 9.10666 10.694 9.10878 13.6204 9.10807C14.0099 9.10807 14.2474 8.90591 14.2403 8.58994C14.2333 8.28458 14.0049 8.09655 13.631 8.09655C11.5818 8.09585 9.53193 8.09585 7.48275 8.09585C7.36824 8.09585 7.25443 8.09585 7.10104 8.09585C7.10104 7.11048 7.10458 6.17177 7.09892 5.23236C7.0968 4.90013 6.86919 4.66899 6.57726 4.67747C6.29169 4.68595 6.09094 4.90084 6.08741 5.22741C6.08104 5.86146 6.08529 6.49481 6.08458 7.12886C6.08458 7.442 6.08458 7.75585 6.08458 8.09585C5.63714 8.09514 5.22716 8.08736 4.81789 8.10009Z" fill="black"></path>
                            </svg>
                        </td>
                        <td style="padding-left: 10px;">Free insured shipping by Tuesday, Feb 14 if you order today.</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.269 2.20985V2.40985H15.469H16.5739C17.4 2.40985 18.1922 2.73801 18.7764 3.32215C19.3605 3.90628 19.6887 4.69854 19.6887 5.52463V18.7837C19.6887 19.6098 19.3605 20.4021 18.7764 20.9862C18.1922 21.5703 17.4 21.8985 16.5739 21.8985H3.31478C2.48869 21.8985 1.69643 21.5703 1.1123 20.9862C0.528163 20.4021 0.2 19.6098 0.2 18.7837V5.52463C0.2 4.69854 0.528163 3.90628 1.1123 3.32215C1.69643 2.73801 2.48869 2.40985 3.31478 2.40985H4.4197H4.6197V2.20985V1.10493C4.6197 0.864924 4.71504 0.634753 4.88475 0.465046C5.05445 0.29534 5.28463 0.2 5.52463 0.2C5.76463 0.2 5.9948 0.29534 6.16451 0.465046C6.33421 0.634753 6.42955 0.864924 6.42955 1.10493V2.20985V2.40985H6.62955H13.2591H13.4591V2.20985V1.10493C13.4591 0.864924 13.5544 0.634753 13.7241 0.465047C13.8939 0.29534 14.124 0.2 14.364 0.2C14.604 0.2 14.8342 0.29534 15.0039 0.465046C15.1736 0.634753 15.269 0.864924 15.269 1.10493V2.20985ZM4.6197 4.4197V4.2197H4.4197H3.31478C2.96869 4.2197 2.63678 4.35718 2.39205 4.60191C2.14733 4.84663 2.00985 5.17854 2.00985 5.52463V9.94433V10.1443H2.20985H17.6788H17.8788V9.94433V5.52463C17.8788 5.17854 17.7413 4.84663 17.4966 4.60191C17.2519 4.35718 16.92 4.2197 16.5739 4.2197H15.469H15.269V4.4197V5.52463C15.269 5.76463 15.1736 5.9948 15.0039 6.16451C14.8342 6.33421 14.604 6.42955 14.364 6.42955C14.124 6.42955 13.8939 6.33421 13.7241 6.16451C13.5544 5.9948 13.4591 5.76463 13.4591 5.52463V4.4197V4.2197H13.2591H6.62955H6.42955V4.4197V5.52463C6.42955 5.76463 6.33421 5.9948 6.16451 6.16451C5.9948 6.33421 5.76463 6.42955 5.52463 6.42955C5.28463 6.42955 5.05445 6.33421 4.88475 6.16451C4.71504 5.9948 4.6197 5.76463 4.6197 5.52463V4.4197ZM2.20985 11.9542H2.00985V12.1542V18.7837C2.00985 19.1298 2.14733 19.4617 2.39205 19.7065L2.53348 19.565L2.39206 19.7065C2.63678 19.9512 2.96869 20.0887 3.31478 20.0887H16.5739C16.92 20.0887 17.2519 19.9512 17.4966 19.7065C17.7413 19.4617 17.8788 19.1298 17.8788 18.7837V12.1542V11.9542H17.6788H2.20985Z" fill="#231F20" stroke="white" stroke-width="0.4"></path>
                                <path d="M6.42928 15.4689C6.42928 15.9687 6.02414 16.3739 5.52436 16.3739C5.02458 16.3739 4.61943 15.9687 4.61943 15.4689C4.61943 14.9692 5.02458 14.564 5.52436 14.564C6.02414 14.564 6.42928 14.9692 6.42928 15.4689Z" fill="#231F20" stroke="white" stroke-width="0.4"></path>
                                <path d="M9.94428 14.564H14.364C14.604 14.564 14.8342 14.6594 15.0039 14.8291C15.1736 14.9988 15.2689 15.2289 15.2689 15.4689C15.2689 15.7089 15.1736 15.9391 15.0039 16.1088C14.8342 16.2785 14.604 16.3739 14.364 16.3739H9.94428C9.70428 16.3739 9.47411 16.2785 9.3044 16.1088C9.1347 15.9391 9.03936 15.7089 9.03936 15.4689C9.03936 15.2289 9.1347 14.9988 9.3044 14.8291C9.47411 14.6594 9.70428 14.564 9.94428 14.564Z" fill="#231F20" stroke="white" stroke-width="0.4"></path>
                            </svg>
                        </td>
                        <td style="padding-left: 10px;">Free 30 Day Returns, Free Resizing. Free Lifetime Warranty.</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.95849 21.0581L9.95043 21.0581L9.94237 21.0582C9.68803 21.0622 9.43707 20.9997 9.21429 20.877L8.88606 20.691L8.88562 20.6908C6.41672 19.294 4.36275 17.267 2.93345 14.8167C1.50417 12.3665 0.750741 9.58093 0.750089 6.74434C0.750089 6.74429 0.750089 6.74423 0.750089 6.74418V6.5895H0.750119L0.750059 6.58279C0.747741 6.32393 0.814196 6.0691 0.942629 5.84435L0.300884 5.47763L0.942629 5.84434C1.07045 5.62065 1.25511 5.43473 1.47788 5.30538L9.21598 0.949934L9.216 0.949973L9.2231 0.945871C9.44535 0.817554 9.69747 0.75 9.9541 0.75C10.2107 0.75 10.4629 0.817554 10.6851 0.945872L10.6851 0.945911L10.6922 0.949934L18.4304 5.3054C18.6531 5.43475 18.8378 5.62066 18.9656 5.84434C19.094 6.0691 19.1605 6.32393 19.1581 6.58279L19.1581 6.58279V6.5895V6.74362C19.1554 9.58236 18.3988 12.3694 16.9656 14.8199C15.5325 17.2703 13.4743 19.2961 11.0015 20.6902L11 20.691L10.6719 20.877C10.4535 20.9972 10.2079 21.0596 9.95849 21.0581Z" stroke="black" stroke-width="1.5"></path>
                            </svg>
                        </td>
                        <td style="padding-left: 10px;">We inspect &amp; verify authenticity before shipping</td>
                    </tr>
                </tbody>
            </table>
            <div class="MuiBox-root css-46b038">
                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium button css-1hw9j7s ring_details" data-val="{{ $ring_data['id'] }}" tabindex=" 0" type="button">Confirm this ring<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1ujsas3" tabindex="0" type="button" id="basic-button" aria-haspopup="true">
                    <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1085 27.8108C23.3297 27.8108 25.1302 26.0103 25.1302 23.7892C25.1302 21.5681 23.3297 19.7676 21.1085 19.7676C18.8874 19.7676 17.0869 21.5681 17.0869 23.7892C17.0869 26.0103 18.8874 27.8108 21.1085 27.8108Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M21.1085 9.04324C23.3297 9.04324 25.1302 7.2427 25.1302 5.02162C25.1302 2.80055 23.3297 1 21.1085 1C18.8874 1 17.0869 2.80055 17.0869 5.02162C17.0869 7.2427 18.8874 9.04324 21.1085 9.04324Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M5.02162 18.4265C7.2427 18.4265 9.04324 16.6261 9.04324 14.4049C9.04324 12.1838 7.2427 10.3833 5.02162 10.3833C2.80055 10.3833 1 12.1838 1 14.4049C1 16.6261 2.80055 18.4265 5.02162 18.4265Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M17.7559 7.03223L8.37207 12.3944" stroke="black" stroke-width="2"></path>
                        <path d="M8.37207 16.4163L17.7559 21.7784" stroke="black" stroke-width="2"></path>
                    </svg>
                    <span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
            </div>
            <p>Your order is protected by the Diamond Guarantee</p>
        </div>
    </div>
    <div class="MuiBox-root css-0" >
        <div class="diamond-view-tabs MuiBox-root css-0">
            <div class="MuiBox-root css-11eac16">
                <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1ujsas3" tabindex="0" type="button">Ring Details<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium copy-video-link css-1hw9j7s" tabindex="0" type="button">
                     <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1n1b3hy" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InsertLinkIcon">
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                     </svg>Copy Video Link<span class="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
            </div>
            <div class="MuiBox-root css-1ggesm8">
                <svg width="1405" height="2" viewBox="0 0 1405 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H238.5H465.5H465.412H1405" stroke="url(#paint0_linear_3971_4661)"></path>
                    <defs>
                        <linearGradient id="paint0_linear_3971_4661" x1="136.503" y1="1" x2="1405" y2="1" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#303030" stop-opacity="0"></stop>
                            <stop offset="0.1449544" stop-color="#303030"></stop>
                            <stop offset="0.627732" stop-color="#303030"></stop>
                            <stop offset="0.973958" stop-color="#303030" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="MuiBox-root css-1n2mv2k">
            <div class="diamond-view-tab-content MuiBox-root css-0">
                <div class="MuiBox-root css-18zjehi">
                    <p>Category : {{ $ring_data['category'] }}</b></p>
                    <p>Sub Category :{{ $ring_data['sub_category'] }}</b></p>
                    <p> Design name: {{ $ring_data['design_name'] }}</b></p>
                    <p> Metal name: {{ $ring_data['metal_name'] }}</b></p>
                </div>
                <div class="MuiBox-root css-18zjehi">
                    <p>Base_price:{{ $ring_data['Base_price'] }} </b></p>
                    <p>additional_metal_price:{{ $ring_data['additional_metal_price'] }} </b></p>
                    <p>total_price:{{ $ring_data['total_price'] }} </b></p>
                </div>
                <div class="MuiBox-root css-1udt4zg">
                    <p>Fluorescence : <b></b></p>
                    <p>Table : <b></b></p>
                    <p>Depth : <b></b></p>
                    <p>Ratio : <b></b></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script>
    $(document).ready(function() {
        var listViewButton = $('#diamond_image');
        var testButton = $('#diamond_video');
        listViewButton.click(function() {
            listViewButton.css('background-color', 'grey');
            testButton.css('background-color', 'white');
        });
        testButton.click(function() {
            testButton.css('background-color', 'grey');
            listViewButton.css('background-color', 'white');
        });
        $("#diamond_image").click(function() {
            $('#diamondimage').show();
            $('#diamondvideo').hide();
        });
        $('#diamond_video').click(function() {
            $('#diamondimage').hide();
            $('#diamondvideo').show();
        });

        $(".ring_details").click(function() {
            var ring_id = $(this).attr("data-val");
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "post",
                data: {
                    ring_id: ring_id
                },
                url: "{{ url('confirm_ring') }}",
                success: function(data){
                    console.log(data);
                    if (data) {
                    window.location.href = "/ring_diamond";
                    }
                }
            });
        });
        // });
    });

</script>
</body>

</html>

