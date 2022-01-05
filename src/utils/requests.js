import axios from "axios";

const testBaseURL = "https://api.publicapis.org";

const users = {
  doTest: () =>
    axios({
      url: "/entries",
      baseURL: testBaseURL,
      method: "get",
    }),
};

export default { users };
