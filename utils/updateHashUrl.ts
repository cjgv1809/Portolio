function handleSmoothScroll() {
  setTimeout(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSectionId = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        console.log(rect.top, rect.bottom);
        console.log(section.id);
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = section.id;
        }
      });

      history.replaceState(null, "", `#${currentSectionId}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial trigger

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, 1000);
}

export { handleSmoothScroll };
