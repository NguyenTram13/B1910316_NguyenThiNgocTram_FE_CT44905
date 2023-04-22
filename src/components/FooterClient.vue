<template>
  <div class="pt-16 py-3 h-[350px] bg-slate-800 w-full">
    <div
      class="flex px-40 items-start gap-5 w-full py-3 border-b-[0.1px] border-white"
    >
      <img
        class="w-[250px] h-[200px] object-contain"
        src="../assets/logo.png"
        alt=""
      />
      <div class="px-3 h-[200px] flex flex-col">
        <div
          class="flex gap-14 uppercase text-white font-bold px-5 border-b-[0.1px] border-white py-4"
        >
          <span
            class="uppercase transition-all cursor-pointer hover:text-orange-400"
            >hotels and resorts</span
          >
          <span
            class="uppercase transition-all cursor-pointer hover:text-orange-400"
            >TRAVEL</span
          >

          <span
            class="uppercase transition-all cursor-pointer hover:text-orange-400"
          >
            GASTRONOMY</span
          >

          <span
            class="uppercase transition-all cursor-pointer hover:text-orange-400"
            >AMUSEMENT</span
          >

          <span
            class="uppercase transition-all cursor-pointer hover:text-orange-400"
            >ACADEMY</span
          >
        </div>
        <div class="flex items-center justify-between flex-1 py-5">
          <div class="flex items-center gap-5 text-white">
            <span class="text-xl font-bold uppercase">Du lịch việt</span>
            <div class="flex flex-col gap-3">
              <p class="flex items-center gap-3 m-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 11 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 8.06979C4.06 8.06979 2.86 6.8998 2.86 5.4298C2.86 3.98979 4.03 2.78979 5.5 2.78979C6.97 2.78979 8.14 3.95979 8.14 5.4298C8.14 6.8698 6.94 8.06979 5.5 8.06979ZM5.5 3.38979C4.39 3.38979 3.46 4.2898 3.46 5.4298C3.46 6.5698 4.36 7.46979 5.5 7.46979C6.64 7.46979 7.54 6.5698 7.54 5.4298C7.54 4.2898 6.61 3.38979 5.5 3.38979Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M5.5 14.6698C5.23 14.6698 4.99 14.4898 4.93 14.2198C4.72 13.4398 4.3 12.2998 3.49 11.3698C2.53 10.2598 1.78 9.11983 1.33 8.33983C1.15 8.09983 0.999999 7.79983 0.849999 7.49983C0.549999 6.83983 0.399999 6.14983 0.399999 5.42983C0.399999 2.60983 2.68 0.329834 5.5 0.329834C8.32 0.329834 10.6 2.60983 10.6 5.42983C10.6 6.14983 10.45 6.83983 10.15 7.49983C10.15 7.49983 10.15 7.49983 10.15 7.52983C10.03 7.82983 9.85 8.12983 9.67 8.39983C9.22 9.14983 8.47 10.2898 7.54 11.3998C6.76 12.3298 6.31 13.4698 6.1 14.2498C6.01 14.4898 5.77 14.6698 5.5 14.6698ZM1.39 7.25983C1.51 7.52983 1.66 7.79983 1.84 8.03983C2.29 8.81983 3.04 9.92984 3.94 11.0098C4.81 12.0298 5.26 13.2598 5.5 14.0998C5.74 13.2598 6.19 12.0298 7.06 11.0098C7.99 9.92984 8.71 8.81983 9.16 8.06983C9.34 7.79983 9.49 7.55983 9.61 7.28983C9.61 7.28983 9.61 7.28983 9.61 7.25983C9.88 6.68983 10 6.05983 10 5.42983C10 2.93983 7.99 0.929834 5.5 0.929834C3.01 0.929834 0.999999 2.93983 0.999999 5.42983C0.999999 6.05983 1.12 6.65983 1.39 7.25983Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span
                  >239A Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, TP. Hồ Chí
                  Minh.</span
                >
              </p>
              <p class="flex items-center gap-3 m-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.28 13.44C11.25 13.44 11.22 13.44 11.19 13.44C6.08999 12.66 1.88999 6.69001 1.53 4.50001C1.2 2.37002 2.90999 1.71002 3.44999 1.56002C3.65999 1.50002 3.89999 1.59002 4.01999 1.77002L5.93999 4.41001C6.05999 4.59001 6.08999 4.80001 5.96999 4.98002L5.18999 6.36001C6.23999 8.10001 8.09999 9.48001 8.54999 9.78001L10.05 9.18001C10.2 9.12001 10.38 9.12001 10.53 9.21001L13.23 10.86C13.41 10.98 13.5 11.19 13.47 11.4C13.17 13.26 11.49 13.44 11.28 13.47C11.31 13.44 11.28 13.44 11.28 13.44ZM3.56999 2.16002C3.02999 2.34002 1.88999 2.85002 2.12999 4.41001C2.45999 6.57001 6.62999 12.12 11.28 12.84C11.49 12.81 12.66 12.66 12.9 11.34L10.26 9.72001L8.75999 10.32C8.57999 10.38 8.39999 10.38 8.24999 10.26C7.67999 9.87001 5.75999 8.46001 4.67999 6.60001C4.58999 6.45001 4.58999 6.24002 4.67999 6.06001L5.45999 4.68002L3.56999 2.16002Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>(84.28) - 3822 5887</span>
              </p>
              <p class="flex items-center gap-3 m-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.15 9.88012H1.85C1.04 9.88012 0.35 9.22012 0.35 8.38012V2.62012C0.35 1.81012 1.01 1.12012 1.85 1.12012H11.15C11.96 1.12012 12.65 1.78012 12.65 2.62012V8.38012C12.65 9.22012 11.99 9.88012 11.15 9.88012ZM1.85 1.72012C1.37 1.72012 0.95 2.11012 0.95 2.62012V8.38012C0.95 8.86012 1.34 9.28012 1.85 9.28012H11.15C11.63 9.28012 12.05 8.89012 12.05 8.38012V2.62012C12.05 2.14012 11.66 1.72012 11.15 1.72012H1.85Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.5 6.40026C6.11 6.40026 5.72 6.28026 5.42 6.01026L0.83 1.99026C0.71 1.87026 0.68 1.69026 0.8 1.57026C0.92 1.45026 1.1 1.42026 1.22 1.54026L5.81 5.56026C6.2 5.89026 6.8 5.89026 7.19 5.56026L11.78 1.54026C11.9 1.42026 12.08 1.45026 12.2 1.57026C12.32 1.69026 12.29 1.87026 12.17 1.99026L7.58 5.98026C7.28 6.25026 6.89 6.40026 6.5 6.40026Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.96 9.55032C11.9 9.55032 11.81 9.52032 11.75 9.49032L7.52001 5.80032C7.40001 5.68032 7.37001 5.50032 7.49001 5.38032C7.61001 5.26032 7.79001 5.23032 7.91001 5.35032L12.17 9.04032C12.29 9.16032 12.32 9.34032 12.2 9.46032C12.14 9.52032 12.05 9.55032 11.96 9.55032Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1.01 9.55035C0.920003 9.55035 0.830003 9.52035 0.770003 9.46035C0.650003 9.34035 0.680003 9.16035 0.800003 9.04035L5.03 5.38035C5.15 5.26035 5.33 5.29035 5.45 5.41035C5.57 5.53035 5.54 5.71035 5.42 5.83035L1.22 9.46035C1.16 9.52035 1.1 9.55035 1.01 9.55035Z"
                    fill="#D6A022"
                    stroke="#D6A022"
                    stroke-width="0.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>ngoctram@gmail.com</span>
              </p>
            </div>
          </div>
          <div class="flex gap-3">
            <span>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 0C10.08 0 0 10.08 0 22.5C0 34.92 10.08 45 22.5 45C34.92 45 45 34.92 45 22.5C45 10.08 34.92 0 22.5 0ZM28.08 23.31H24.39V36.36H18.99V23.31H16.38V18.72H18.99V15.75C18.99 13.59 19.98 10.26 24.48 10.26H28.53V14.76H25.65C25.2 14.76 24.48 15.03 24.48 16.02V18.72H28.62L28.08 23.31Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.71 26.729L27 22.499L19.71 18.269V26.729Z"
                  fill="white"
                ></path>
                <path
                  d="M22.5 0C10.08 0 0 10.08 0 22.5C0 34.92 10.08 45 22.5 45C34.92 45 45 34.92 45 22.5C45 10.08 34.92 0 22.5 0ZM36.54 22.5C36.54 22.5 36.54 27.09 36 29.25C35.64 30.42 34.74 31.41 33.48 31.77C31.32 32.31 22.5 32.31 22.5 32.31C22.5 32.31 13.68 32.31 11.52 31.68C10.35 31.32 9.36 30.42 9 29.16C8.46 27 8.45999 22.41 8.45999 22.41C8.45999 22.41 8.46 17.82 9 15.66C9.36 14.49 10.26 13.5 11.52 13.14C13.68 12.6 22.5 12.6 22.5 12.6C22.5 12.6 31.32 12.6 33.48 13.23C34.65 13.59 35.64 14.49 36 15.75C36.54 17.91 36.54 22.5 36.54 22.5Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between py-5 text-white px-60">
      <span>@2023 Dulichviet</span>
      <p class="flex m-0 gap-7">
        <span class="transition-all cursor-pointer hover:text-orange-600"
          >Sitemap</span
        >
        <span class="transition-all cursor-pointer hover:text-orange-600"
          >Contact</span
        >
      </p>
    </div>
  </div>
</template>

<style scrop>
.background-footer {
  background-image: url("../assets/bg-footer.png");
  background-size: cover;
}
</style>
