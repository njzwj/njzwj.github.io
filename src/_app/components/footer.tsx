import Container from "@/app/components/container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="pt-8 pb-20 flex flex-row justify-center">
          <h3 className="text-md text-gray-600">
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
      </Container>
    </footer>
  );
};

export default Footer;
