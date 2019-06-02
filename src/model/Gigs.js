import Sequalize from 'sequelize';
import Connection from '../../config/db';

const connect = new Connection();

const Gigs = connect.db.define('gigs', {
  title: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  technologies: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  contact_email: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  budget: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

export default Gigs;
