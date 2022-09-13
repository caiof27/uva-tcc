import db from "../infra/db/postgres/models";
import app from "../main/config/app";

const port = 3027;


db.sequelize.authenticate().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
