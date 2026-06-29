import footerData from "../../data/footerData";

import ScrollTop from "./ScrollTop";

function Footer() {
  return (
    <footer
      className="bg-gray-900
        text-white
        py-16"
    >
      <div
        className="mx-auto
            max-w-7xl
            px-6"
      >
        <h2
          className="text-4xl
                font-bold"
        >
          {footerData.logo}
        </h2>

        <p
          className="mt-4
                max-w-lg
                text-gray-300"
        >
          {footerData.description}
        </p>

        <ul
          className="mt-10
                flex
                flex-wrap
                gap-6"
        >
          {footerData.links.map((link) => (
            <li key={link.id}>
              <a href={link.path} className="hover:text-blue-400">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="mt-10
                flex
                gap-6"
        >
          {footerData.social.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-2xl
                                hover:text-blue-400"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <hr
          className="my-10
                border-gray-700"
        />

        <p
          className="text-center
                text-gray-400"
        >
          © 2026 Portfolio. All Rights Reserved.
        </p>
      </div>

      <ScrollTop />
    </footer>
  );
}

export default Footer;
