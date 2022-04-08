class HomeController {
  async index(req, res) {
    res
      .status(200)
      .json({ message: "Backend Challenge 2021 🏅 - Covid Daily Cases" });
  }
}

module.exports = new HomeController();
