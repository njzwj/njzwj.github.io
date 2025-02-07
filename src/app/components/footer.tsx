import { Divider } from "@nextui-org/react";

import Body from "./body"

export default function Footer() {
  return (
    <footer className="mt-32">
      <Divider />
      <Body>
        <div className="pt-10 pb-32 flex flex-col justify-center items-center">
          <p className="text-sm text-gray-600">
            This work by <span property="cc:attributionName">njzwj</span> is licensed under 
            {" "}
            <a 
              href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" 
              target="_blank" 
              rel="license noopener noreferrer" 
              className="text-green-600 hover:bg-green-600 hover:text-white duration-200 transition-colors inline-flex items-center" 
            >
              CC BY-NC 4.0
              <img 
              style={{ height: "22px", marginLeft: "3px", verticalAlign: "middle" }} 
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" 
              alt=""
              />
              <img 
              style={{ height: "22px", marginLeft: "3px", verticalAlign: "middle" }} 
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" 
              alt=""
              />
              <img 
              style={{ height: "22px", marginLeft: "3px", verticalAlign: "middle" }} 
              src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" 
              alt=""
              />
            </a>
          </p>
          <h3 className="text-sm text-gray-600 pt-4">
            Made with love at
            {" "}
            <a
              href="https://en.wikipedia.org/wiki/Suzhou"
              className="text-green-600 hover:bg-green-600 hover:text-white duration-200 transition-colors"
            >
              Suzhou
            </a>
            .
          </h3>
        </div>
      </Body>
    </footer>
  );
};
