function Header() {
  return (
    <div class="w-full h-14 bg-yellow-100 flex items-center justify-between">
      <div>
        <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-300">
          PINGU
        </p>
      </div>

      <div class="flex items-center justify-center gap-18 text-gray-500 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Teck Stack</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

      <div class="flex items-center justify-center gap-7">
        <img src="/public/mini_git.svg" />
        <img src="/public/mini_twit.svg" />
        <img src="/public/mini_insta.svg" />
      </div>
    </div>
  );
}

export default Header;
