class Bird {
  home(req, res) {
    res.send("Home page...");
  }
  about(req, res) {
    throw "Testing";
    res.send("About birds...");
  }
}
export const bird = new Bird();
