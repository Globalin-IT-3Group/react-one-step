function Footer() {
  return (
    <div class="w-full h-30 flex flex-col justify-between">
      <div class="flex items-center justify-between">
        <div class="w-1/2">
          <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-300">
            PINGU
          </p>
        </div>

        <div class="flex items-center justify-between w-1/2 font-semibold text-gray-500">
          <p>+82 12345 67890</p>
          <p>pingu@globalin.com</p>
          <div class="flex items-center justify-center gap-7">
            <img src="/public/mini_git.svg" />
            <img src="/public/mini_twit.svg" />
            <img src="/public/mini_insta.svg" />
          </div>
        </div>
      </div>

      <div class="w-full h-[2px] bg-gray-300"></div>

      <div class="text-center">
        <p class="text-gray-400">Designed and built by Jimin</p>
      </div>
    </div>
  );
}

export default Footer;
