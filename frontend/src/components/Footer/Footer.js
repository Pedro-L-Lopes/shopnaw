import logo from "../../images/21store.png";

const Footer = () => {
  return (
    <footer class="bg-gray-100 border-t mt-10">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-center text-black">
          <img src={logo} alt="Logo da loja" className="w-24" />
        </div>

        <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"></p>

        <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Sobre nós
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Termos de uso/políticas de privacidade
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Ajuda
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Services
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Contato +55 33 999000000
            </a>
          </li>
        </ul>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/pedrolopesrl/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Whatsapp</span>
              <svg
                class="h-6 w-6"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill="#000000"
                  fill-rule="evenodd"
                  d="M96 16c-44.183 0-80 35.817-80 80 0 13.12 3.163 25.517 8.771 36.455l-8.608 36.155a6.002 6.002 0 0 0 7.227 7.227l36.155-8.608C70.483 172.837 82.88 176 96 176c44.183 0 80-35.817 80-80s-35.817-80-80-80ZM28 96c0-37.555 30.445-68 68-68s68 30.445 68 68-30.445 68-68 68c-11.884 0-23.04-3.043-32.747-8.389a6.003 6.003 0 0 0-4.284-.581l-28.874 6.875 6.875-28.874a6.001 6.001 0 0 0-.581-4.284C31.043 119.039 28 107.884 28 96Zm46.023 21.977c11.975 11.974 27.942 20.007 45.753 21.919 11.776 1.263 20.224-8.439 20.224-18.517v-6.996a18.956 18.956 0 0 0-13.509-18.157l-.557-.167-.57-.112-8.022-1.58a18.958 18.958 0 0 0-15.25 2.568 42.144 42.144 0 0 1-7.027-7.027 18.958 18.958 0 0 0 2.569-15.252l-1.582-8.021-.112-.57-.167-.557A18.955 18.955 0 0 0 77.618 52H70.62c-10.077 0-19.78 8.446-18.517 20.223 1.912 17.81 9.944 33.779 21.92 45.754Zm33.652-10.179a6.955 6.955 0 0 1 6.916-1.743l8.453 1.665a6.957 6.957 0 0 1 4.956 6.663v6.996c0 3.841-3.124 6.995-6.943 6.585a63.903 63.903 0 0 1-26.887-9.232 64.594 64.594 0 0 1-11.661-9.241 64.592 64.592 0 0 1-9.241-11.661 63.917 63.917 0 0 1-9.232-26.888C63.626 67.123 66.78 64 70.62 64h6.997a6.955 6.955 0 0 1 6.66 4.957l1.667 8.451a6.956 6.956 0 0 1-1.743 6.917l-1.12 1.12a5.935 5.935 0 0 0-1.545 2.669c-.372 1.403-.204 2.921.603 4.223a54.119 54.119 0 0 0 7.745 9.777 54.102 54.102 0 0 0 9.778 7.746c1.302.806 2.819.975 4.223.603a5.94 5.94 0 0 0 2.669-1.545l1.12-1.12Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Pedro-L-Lopes"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/pedro-lucas-41a838241/"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Linkedin</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
              >
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-gray-700 transition hover:text-gray-700/75">
          Desenvolvido por{" "}
          <a href="https://www.linkedin.com/in/pedro-lucas-41a838241/">
            Pedro Lucas
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
