const experss = require(express);
const router = express.Router();

router.route("/register").post(registerUser);
module.exports = router;