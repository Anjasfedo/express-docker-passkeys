const express = require("express");
const router = express.Router();

const PassportService = require("../app/services/passportsService");

const SessionChallangeStore =
  require("passport-fido2-webauthn").SessionChallengeStore;

const passportService = new PassportService();

const store = new SessionChallangeStore();

passportService.init(store);

const pages = new (require("../app/controllers/pages"))();
const auth = new (require("../app/controllers/auth"))();
const admin = new (require("../app/controllers/admin"))();

router.get("/", pages.welcome, admin.dashboard);

router.get("/login", auth.login);

router.get("/register", auth.register);

module.exports = router;
