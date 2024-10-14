import Body from "./body"

export default function Footer() {
  return (
    <footer>
      <Body>
        <div className="pt-10 pb-10 flex flex-row justify-center">
          <h3 className="text-sm text-gray-600">
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
